import { Tables } from '@/types/database.types'
import { BookMarksUserTweet } from '@/types/querys-db'
import { createClient } from '@/utils/supabase/server'

interface GetInteractionsProps {
    userId: Tables<'users'>['id']
    tweetId?: Tables<'tweets'>['id']
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

export const getBookmarksInteractions = async ({ userId, tweetId }: GetInteractionsProps): Promise<Tables<'favorites'>[]> => {
  const supabase = await createClient()
  try {
    const { data, error } = await supabase.from('favorites').select().match({ user_id: userId, tweet_id: tweetId })
    if (error) throw new Error('Error. Algo falló al momento de obtener los favoritos')
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getBookMarks = async ({ userId }: {userId: Tables<'users'>['id']}): Promise<BookMarksUserTweet[]> => {
  const supabase = await createClient()
  const { data, error } = await supabase.from('favorites').select('tweet:tweets!favorites_tweet_id_fkey (id, content, image_url, likes, retuits, comments, created_at, creator:users!tweets_user_id_fkey  (id, name, username, avatar_url, biography, following, followers))').eq('user_id', userId)

  if (error) throw new Error('Error. Algo falló al momento de obtener los favoritos')

  return data
}
