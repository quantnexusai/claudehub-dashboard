import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// Create a dummy client that will be replaced at runtime
let supabaseInstance: SupabaseClient | null = null

export const getSupabase = () => {
  if (!supabaseInstance && typeof window !== 'undefined') {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey)
  }
  return supabaseInstance || createClient(supabaseUrl, supabaseAnonKey)
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const createServerClient = () => {
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-service-key'
  return createClient(supabaseUrl, supabaseServiceKey)
}
