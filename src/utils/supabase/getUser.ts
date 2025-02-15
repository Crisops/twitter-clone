import { User } from '@supabase/supabase-js'
import { Tables } from '@/types/database.types'
import { createClient } from '@/utils/supabase/server'

export const getSessionAuth = async (): Promise<User> => {
  try {
    const supabase = await createClient()
    const { data: { user }, error } = await supabase.auth.getUser()

    if (!user || error) throw new Error('Error. Fallo el proceso de obtener la sesión del usuario')

    return user
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getUserProfile = async ({ id }: { id: Tables<'users'>['id'] }): Promise<Tables<'users'>> => {
  try {
    const supabase = await createClient()

    const usersQuery = supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single()

    const { data, error } = await usersQuery

    if (error) throw new Error('Error. El usuario no fue encontrado')

    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getUserProfileByUsername = async ({ username }: {username: Tables<'users'>['username']}): Promise<Tables<'users'>> => {
  const supabase = await createClient()

  try {
    const userQuery = supabase
      .from('users')
      .select()
      .eq('username', username)
      .single()

    const { data, error } = await userQuery

    if (error) throw new Error(`El usuario con el username: ${username} no existe.`)

    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}
