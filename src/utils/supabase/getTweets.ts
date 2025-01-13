import { QueryData } from '@supabase/supabase-js'
import { createClient } from './server'
import { Tables } from '@/types/database.types'
import { TweetInfo } from '@/types/querys-db'

export const getTweets = async () => {
  try {
    const supabase = await createClient()

    const tweetsQuery = supabase.from('tweets').select('*, creator:users!tweets_user_id_fkey (name, username, avatar_url, biography, following, followers)').order('created_at', { ascending: false })

    type Tweets = QueryData<typeof tweetsQuery>

    const { data, error } = await tweetsQuery

    if (error) throw new Error('Error. No se pudieron obtener los tweets')

    const tweets: Tweets = data

    return tweets
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getTweetsAndRetweets = async ({ id }: { id: Tables<'users'>['id'] }) => {
  try {
    const supabase = await createClient()

    const { data, error } = await supabase.rpc('get_user_posts_and_retweets', { user_uuid: id }).order('created_at', { ascending: false })

    if (error) throw new Error('Error. No se pudieron obtener los tweets y retweets del usuario')

    const tweets: TweetInfo[] = data.map((tweet) => {
      return {
        id: tweet.tweet_id,
        content: tweet.content,
        image_url: tweet.image_url,
        likes: tweet.likes,
        retuits: tweet.retuits,
        comments: tweet.comments,
        created_at: tweet.created_at,
        creator: {
          id: tweet.action_user_id,
          name: tweet.name,
          username: tweet.username,
          avatar_url: tweet.avatar_url,
          biography: tweet.biography,
          followers: tweet.followers,
          following: tweet.following
        },
        post_type: tweet.post_type
      }
    })

    return tweets
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getUserTweetCount = async ({ id }: { id: Tables<'users'>['id'] }) => {
  try {
    const supabase = await createClient()

    const tweetsQuery = supabase.from('tweets').select('count').eq('user_id', id).single()

    type Tweets = QueryData<typeof tweetsQuery>

    const { data, error } = await tweetsQuery

    if (error) throw new Error('Error. No se pudo obtener la cantidad de Tweets del usuario')

    const tweets: Tweets = data

    return tweets
  } catch (error) {
    console.log(error)
    throw error
  }
}
