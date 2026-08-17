import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Session, User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

interface HouseholdMembership {
  householdId: string;
  memberId: string;
  householdName: string;
}

interface AuthState {
  session: Session | null;
  user: User | null;
  membership: HouseholdMembership | null;
  loading: boolean;
  refreshMembership: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [membership, setMembership] = useState<HouseholdMembership | null>(null);
  const [loading, setLoading] = useState(true);

  async function loadMembership(userId: string) {
    const { data } = await supabase
      .from('household_members')
      .select('id, household_id, households ( name )')
      .eq('user_id', userId)
      .maybeSingle();
    if (data) {
      setMembership({
        householdId: data.household_id,
        memberId: data.id,
        // @ts-expect-error — el join anidado de Supabase no infiere el tipo automáticamente aquí.
        householdName: data.households?.name ?? '',
      });
    } else {
      setMembership(null);
    }
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      if (data.session) loadMembership(data.session.user.id).finally(() => setLoading(false));
      else setLoading(false);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, next) => {
      setSession(next);
      if (next) loadMembership(next.user.id);
      else setMembership(null);
    });

    return () => sub.subscription.unsubscribe();
  }, []);

  const value: AuthState = {
    session,
    user: session?.user ?? null,
    membership,
    loading,
    refreshMembership: async () => {
      if (session) await loadMembership(session.user.id);
    },
    signOut: async () => {
      await supabase.auth.signOut();
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth debe usarse dentro de <AuthProvider>');
  return ctx;
}
