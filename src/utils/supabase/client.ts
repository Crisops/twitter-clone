import { createBrowserClient } from '@supabase/ssr'
import { EnvConfig } from '@/config/env.config'


export function createClient() {
  return createBrowserClient(
    EnvConfig().SUPABASE_URL!,
    EnvConfig().SUPABASE_ANON_KEY!
  )
}