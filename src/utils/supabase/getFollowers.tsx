import { Tables } from '@/types/database.types'
import { createClient } from './server'

type getFollowersProps = {
    follower: string[]
    following: string[]
}

export const getFollowers = async ({ idSessionUser }: {idSessionUser: Tables<'users'>['id']}): Promise<getFollowersProps[]> => {
  const supabase = await createClient()

  try {
    const { data, error } = await supabase.from('followers').select('follower:user_id_follower, followings:user_id_following').eq('user_id_follower', idSessionUser)

    if (error) throw new Error('Error. The user not found')

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
