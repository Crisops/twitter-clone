
const {
    NEXT_PUBLIC_SUPABASE_URL: SUPABASE_URL = '',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: SUPABASE_ANON_KEY = ''
} = process.env



export const EnvConfig = () => ({
    SUPABASE_URL,
    SUPABASE_ANON_KEY
})