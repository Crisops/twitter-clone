import { Tables } from '@/types/database.types'
import { createClient } from './server'

interface GetInteractionsProps {
    userId: Tables<'users'>['id']
    tweetId: Tables<'tweets'>['id']
}

export const getComments = async ({ userId, tweetId }: GetInteractionsProps): Promise<Tables<'comments'>[]> => {
  const supabase = await createClient()

  try {
    const userQuery = supabase
      .from('comments')
      .select()
      .match({ user_id: userId, tweet_id: tweetId })
    const { data, error } = await userQuery

    if (error) throw new Error('Error. Algo fallo al momento de obtener los comentarios del post')

    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getRetweets = async ({ userId, tweetId }: GetInteractionsProps): Promise<Tables<'retuits'>[]> => {
  const supabase = await createClient()

  try {
    const userQuery = supabase
      .from('retuits')
      .select()
      .match({ user_id: userId, tweet_id: tweetId })
    const { data, error } = await userQuery

    if (error) throw new Error('Error. Algo fallo al momento de obtener los retweets del post')

    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getLikes = async ({ userId, tweetId }: GetInteractionsProps): Promise<Tables<'likes'>[]> => {
  const supabase = await createClient()

  try {
    const userQuery = supabase
      .from('likes')
      .select()
      .match({ user_id: userId, tweet_id: tweetId })
    const { data, error } = await userQuery

    if (error) throw new Error('Error. Algo fallo al momento de obtener los likes del post')

    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}
