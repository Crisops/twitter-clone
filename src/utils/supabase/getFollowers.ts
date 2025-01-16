import { Tables } from '@/types/database.types'
import { createClient } from './server'
import { GetAllFollowersProps, GetFollowersPage, UsersFollowers } from '@/types/querys-db'

export const getAllFollowers = async ({ idUserSession }: {idUserSession: Tables<'users'>['id']}): Promise<GetAllFollowersProps[]> => {
  const supabase = await createClient()

  try {
    const { data, error } = await supabase.from('followers').select('follower:user_id_follower, followings:user_id_following').eq('user_id_follower', idUserSession)

    if (error) throw new Error('Error. No se pudieron obtener los seguidores y seguidos del usuario')

    const followers = data.map(follow => {
      return {
        follower: [follow.follower],
        following: [follow.followings]
      }
    })

    return followers
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getFollowersUserData = async ({ idUser, filterColumn, columnRelation }: GetFollowersPage): Promise<UsersFollowers[]> => {
  const supabase = await createClient()

  try {
    const { data, error } = await supabase
      .from('followers')
      .select(`
        idFollower:user_id_follower,
        idFollowing: user_id_following,
        user:users!${columnRelation} (
            id,
            name,
            username,
            src:avatar_url,
            biography,
            followers,
            following
          )
        `)
      .eq(filterColumn, idUser)

    if (error) throw new Error('Error. No se pudieron obtener los seguidores y seguidos del usuario')

    return data as UsersFollowers[]
  } catch (error) {
    console.log(error)
    throw error
  }
}
