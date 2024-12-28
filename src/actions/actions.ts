'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { TablesInsert } from '@/types/database.types'

export async function signup () {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'http://localhost:3000/auth/callback',
      queryParams: {
        access_type: 'offline',
        prompt: 'consent'
      }
    }
  })

  if (error) {
    redirect('/error')
  }

  if (data.url) {
    revalidatePath('/')
    redirect(data.url)
  }
}

export async function createTweet ({ content, image_url: imageUrl, user_id: idUser }: TablesInsert<'tweets'>) {
  const supabase = await createClient()

  const { error } = await supabase.from('tweets').insert({ content, image_url: imageUrl, user_id: idUser })

  if (error) throw new Error('Error. Failed create tweet')

  revalidatePath('/home')
}
