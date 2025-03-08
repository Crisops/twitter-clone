import { HTMLProps } from 'react'
import { Tables } from '@/types/database.types'
import { getSessionAuth, getUserProfile } from '@/utils/supabase/getUser'
import FormPostClient from '@/components/Posts/FormPostClient'
import TweetImageUser from '@/components/Home/TweetImageUser'
import { getTweetById } from '@/utils/supabase/getTweets'

interface FormPostServerProps {
  className: HTMLProps<HTMLElement>['className']
  idPost: Tables<'tweets'>['id']
}

export default async function FormPostServer ({ idPost, className }: FormPostServerProps) {
  const { id } = await getSessionAuth()
  const { name, username, avatar_url: avatar } = await getUserProfile({ id })
  const { content, created_at: date, creator } = await getTweetById({ idPost })

  return (
    <FormPostClient idSession={id} idTweet={idPost} className={className} creatorTweet={creator} contentTweet={content} dateTweet={date}>
      <TweetImageUser avatar_url={avatar} name={name} username={username} />
    </FormPostClient>
  )
}
