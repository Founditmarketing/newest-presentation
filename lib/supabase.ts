import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Warn instead of crashing if keys are missing
if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Missing Supabase credentials. Real-time features will be disabled.');
}

// Export null if credentials are missing, otherwise create client
export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;
