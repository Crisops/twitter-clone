import { Tables } from '@/types/database.types'
import { createClient } from './server'
import { CommentInfo } from '@/types/querys-db'

export const getCommentsTweetById = async ({ idTweet }: {idTweet: Tables<'tweets'>['id']}): Promise<CommentInfo[]> => {
  const supabase = await createClient()
  try {
    const { data, error } = await supabase.from('comments').select('id:tweet_id, content, image_url, created_at, creator:users!comments_user_id_fkey (id, name,username, avatar_url, biography, followers, following)').eq('tweet_id', idTweet).returns<CommentInfo[]>().order('created_at', { ascending: false })

    if (error) throw new Error('Error, Failure to get post comments ')

    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}
