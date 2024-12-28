import { Tables } from '@/types/database.types'
import { createClient } from './server'
import { User } from '@supabase/supabase-js'

type GetUserProps = {
    id: string
}

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

export const getUserProfile = async ({ id }: GetUserProps): Promise<Tables<'users'>> => {
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
