import { HTMLProps } from 'react'
import { getSessionAuth, getUserProfile } from '@/utils/supabase/getUser'
import { Tables } from '@/types/database.types'
import FormComposePost from '@/components/Home/FormComposePost'
import TweetImageUser from '@/components/Home/TweetImageUser'
import FormPostServer from '../Posts/FormPostServer'

interface FormTweetServerProps {
  className: HTMLProps<HTMLElement>['className']
  idPost?: Tables<'tweets'>['id']
  loadingForm: 'create-post' | 'comment-post'
}

export default async function FormTweetServer ({ className, idPost, loadingForm }: FormTweetServerProps) {
  const { id } = await getSessionAuth()
  const { name, username, avatar_url: avatar } = await getUserProfile({ id })

  return (
    <>
      {
      loadingForm === 'create-post' &&
        <FormComposePost idSession={id} className={className}>
          <TweetImageUser avatar_url={avatar ?? ''} name={name} username={username} />
        </FormComposePost>
      }
      {
        loadingForm === 'comment-post' &&
          <FormPostServer idPost={idPost ?? ''} className={className} />
      }
    </>

  )
}
