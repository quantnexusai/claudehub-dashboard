import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 'placeholder-key'

// Create a dummy client that will be replaced at runtime
let supabaseInstance: SupabaseClient | null = null

export const getSupabase = () => {
  if (!supabaseInstance && typeof window !== 'undefined') {
    supabaseInstance = createClient(supabaseUrl, supabasePublishableKey)
  }
  return supabaseInstance || createClient(supabaseUrl, supabasePublishableKey)
}

export const supabase = createClient(supabaseUrl, supabasePublishableKey)

export const createServerClient = () => {
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY || 'placeholder-secret-key'
  return createClient(supabaseUrl, supabaseSecretKey)
}
