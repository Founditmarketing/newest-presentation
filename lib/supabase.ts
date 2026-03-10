import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://umhmrsjrhlijmfpjyreu.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_PZ5PEXxNfUFYl8AN7aksWw_T_KJSXZg';

console.log('[SUPABASE] Initializing Supabase client...', {
    urlLength: supabaseUrl ? supabaseUrl.length : 0,
    keyLength: supabaseAnonKey ? supabaseAnonKey.length : 0
});

// Warn instead of crashing if keys are missing
if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('[SUPABASE] Missing Supabase credentials. Real-time features will be disabled.');
}

// Export null if credentials are missing, otherwise create client
export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;
