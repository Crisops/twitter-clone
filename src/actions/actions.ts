'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { Tables, TablesInsert, TablesUpdate } from '@/types/database.types'
import { AuthError } from '@supabase/supabase-js'
import { SignUpProps, SignUpProvider } from '@/types/generics'

export async function login ({ email, password }: {email: Tables<'users'>['email'], password: string}) {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) throw new Error('Error. Algo fallo al momento de querer iniciar sesión')

  if (data.user) redirect('/home')
}

export async function signup ({ provider, data }: SignUpProps) {
  const supabase = await createClient()
  let dataSignUp: SignUpProvider = { url: null, provider }
  let errorSignUp: AuthError | null = null

  if (provider !== 'email') {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: 'http://localhost:3000/auth/callback',
        queryParams: {
          access_type: 'offline',
          prompt: 'consent'
        }
      }
    })
    dataSignUp = data
    errorSignUp = error
  }

  if (provider === 'email' && data) {
    const { fullName, username, email, password } = data

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: 'http://localhost:3000/home',
        data: {
          name: fullName,
          username,
          email,
          avatar_url: 'https://stogyupktdyxbgmlhyaf.supabase.co/storage/v1/object/public/avatars//not%20user.jpeg',
          provider
        }
      }
    })
    errorSignUp = error
  }

  if (errorSignUp) {
    redirect('/error')
  }

  if (dataSignUp.url) {
    revalidatePath('/')
    redirect(dataSignUp.url)
  }
}

export async function comeBackHome () {
  redirect('/home')
}

export async function isEmailOrUsernameTaken ({ email, username }: { email: Tables<'users'>['email'], username?: Tables<'users'>['username'] }) {
  const supabase = await createClient()

  const { data, error } = await supabase.from('users').select('email, username, hash_password').or(`username.eq.${username},email.eq.${email}`).single()

  return {
    exists: !!data, // Devuelve `true` si el usuario ya existe
    emailExists: data?.email === email,
    hash_password: data?.hash_password,
    usernameExists: data?.username === username,
    error
  }
}

export async function updateProfile (idUserSession: Tables<'users'>['id'], data: TablesUpdate<'users'>) {
  const supabase = await createClient()
  const { error } = await supabase.from('users').update(data).eq('id', idUserSession)

  revalidatePath('/(home)/[username]/[[...profile]]', 'page')
  return { error }
}

export async function createTweet ({ user_id: idUser, image_url: imageUrl, content }: TablesInsert<'tweets'>) {
  const supabase = await createClient()

  const { error } = await supabase.from('tweets').insert({ user_id: idUser, image_url: imageUrl, content })

  if (error) throw new Error('Error. Failed create tweet')

  revalidatePath('/home')
}

export async function deleteTweet ({ id: tweetId, user_id: userId }: {id: Tables<'tweets'>['id'], user_id: Tables<'users'>['id']}) {
  const supabase = await createClient()

  const { error } = await supabase.from('tweets').delete().eq('id', tweetId).eq('user_id', userId)

  revalidatePath('/(home)/home')
  revalidatePath('/(home)/[username]', 'layout')

  return { error }
}

export async function insertComment ({ user_id: userId, tweet_id: tweetId, content, image_url: imageUrl }: TablesInsert<'comments'>) {
  const supabase = await createClient()

  const { error } = await supabase.from('comments').insert({ user_id: userId, tweet_id: tweetId, content, image_url: imageUrl })

  if (error) throw new Error('Error. Failed create comment in the tweet')

  revalidatePath('/(home)/[username]/status/[idPost]', 'page')
}

export async function deleteComment ({ user_id: userId, tweet_id: tweetId }: TablesInsert<'comments'>) {
  const supabase = await createClient()

  const { error } = await supabase.from('comments').delete().eq('user_id', userId).eq('tweet_id', tweetId)

  if (error) throw new Error('Error. Failed delete comment')
}

export async function insertRetweet ({ user_id: userId, tweet_id: tweetId }: TablesInsert<'retuits'>) {
  const supabase = await createClient()

  const { error } = await supabase.from('retuits').insert({ user_id: userId, tweet_id: tweetId })

  if (error) throw new Error('Error. Failed to create retweet ')

  revalidatePath('/home')
  revalidatePath('/(home)/[username]', 'layout')
}

export async function deleteRetweet ({ user_id: userId, tweet_id: tweetId }: TablesInsert<'retuits'>) {
  const supabase = await createClient()

  const { error } = await supabase.from('retuits').delete().eq('user_id', userId).eq('tweet_id', tweetId)

  if (error) throw new Error('Error. Failed remove retweet')

  revalidatePath('/home')
  revalidatePath('/(home)/[username]', 'layout')
}

export async function insertLikes ({ user_id: userId, tweet_id: tweetId }: TablesInsert<'likes'>) {
  const supabase = await createClient()

  const { error } = await supabase.from('likes').insert({ user_id: userId, tweet_id: tweetId })

  if (error) throw new Error('Error. Could not like the Tweet')

  revalidatePath('/home')
  revalidatePath('/(home)/[username]', 'layout')
}

export async function deleteLikes ({ user_id: userId, tweet_id: tweetId }: TablesInsert<'likes'>) {
  const supabase = await createClient()

  const { error } = await supabase.from('likes').delete().eq('user_id', userId).eq('tweet_id', tweetId)

  if (error) throw new Error('Error. Failed delete like tweeet')

  revalidatePath('/home')
  revalidatePath('/(home)/[username]', 'layout')
}

export async function insertFollowUser ({ user_id_follower: idUserFollower, user_id_following: idUserFollowing }: TablesInsert<'followers'>) {
  const supabase = await createClient()

  const { error } = await supabase.from('followers').insert({ user_id_follower: idUserFollower, user_id_following: idUserFollowing })

  revalidatePath('/home')
  revalidatePath('/(home)/[username]', 'layout')

  return { error }
}

export async function deleteFollowUser ({ user_id_follower: idUserFollower, user_id_following: idUserFollowing }: TablesInsert<'followers'>) {
  const supabase = await createClient()

  const { error } = await supabase.from('followers').delete().eq('user_id_follower', idUserFollower).eq('user_id_following', idUserFollowing)
  revalidatePath('/home')
  revalidatePath('/(home)/[username]', 'layout')
  return { error }
}
