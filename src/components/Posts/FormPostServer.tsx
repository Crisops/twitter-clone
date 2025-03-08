import { HTMLProps } from 'react'
import { Tables } from '@/types/database.types'
import { getSessionAuth, getUserProfile } from '@/utils/supabase/getUser'
import FormPostClient from '@/components/Posts/FormPostClient'
import TweetImageUser from '@/components/Home/TweetImageUser'

interface FormPostServerProps {
  className: HTMLProps<HTMLElement>['className']
  idPost: Tables<'tweets'>['id']
}

export default async function FormPostServer ({ idPost, className }: FormPostServerProps) {
  const { id } = await getSessionAuth()
  const { name, username, avatar_url: avatar } = await getUserProfile({ id })
  return (
    <FormPostClient idSession={id} idTweet={idPost} className={className}>
      <TweetImageUser avatar_url={avatar} name={name} username={username} />
    </FormPostClient>
  )
}
