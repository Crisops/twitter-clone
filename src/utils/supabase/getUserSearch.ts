import { Tables } from '@/types/database.types'
import { UsersSearch } from '@/types/querys-db'
import { createClient } from '@/utils/supabase/client'

const getSupabase = () => {
  const supabase = createClient()
  return supabase
}

export const getUserSearch = async ({ query }: {query: Tables<'users'>['username'] | Tables<'users'>['name']}): Promise<UsersSearch[]> => {
  const supabase = getSupabase()

  try {
    const { data, error } = await supabase
      .from('users')
      .select('id, name, username, src:avatar_url')
      .or(`username.ilike.%${query}%,name.ilike.%${query}%`)
      .limit(10)
    if (error) throw new Error('Error. No se puede realizar la consulta de buscar usuarios')

    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}
