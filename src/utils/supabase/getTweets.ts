import { QueryData } from '@supabase/supabase-js'
import { createClient } from './server'
import { Tables } from '@/types/database.types'

type IdUser = {
  id: Tables<'users'>['id']
}

export const getTweets = async () => {
  try {
    const supabase = await createClient()

    const tweetsQuery = supabase.from('tweets').select('*, creator:users!tweets_user_id_fkey (name, username, avatar_url)').order('created_at', { ascending: false })

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

export const getTweetsById = async ({ id }:IdUser) => {
  try {
    const supabase = await createClient()

    const tweetsQuery = supabase.from('tweets').select('*, creator:users!tweets_user_id_fkey (name, username, avatar_url)').eq('user_id', id).order('created_at', { ascending: false })

    type Tweets = QueryData<typeof tweetsQuery>

    const { data, error } = await tweetsQuery

    if (error) throw new Error('Error. No se pudieron obtener los tweets del usuario')

    const tweets: Tweets = data

    return tweets
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getTweetsCountUser = async ({ id }:IdUser) => {
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
