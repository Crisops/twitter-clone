import { getSessionAuth, getUserProfile } from '@/utils/supabase/getUser'
import FormTweetClient from './FormTweet.Client'
import TweetImageUser from './TweetImageUser'
import FormComposePost from './FormComposePost'

interface FormTweetServerProps {
  viewModal: 'modal' | 'home'
}

export default async function FormTweetServer ({ viewModal }: FormTweetServerProps) {
  const { id } = await getSessionAuth()
  const { name, username, avatar_url: avatar } = await getUserProfile({ id })

  return (
    <>
      {viewModal === 'home'
        ? (
          <FormTweetClient idSession={id}>
            <TweetImageUser avatar_url={avatar ?? ''} name={name} username={username} />
          </FormTweetClient>
          )
        : (
          <FormComposePost idSession={id}>
            <TweetImageUser avatar_url={avatar ?? ''} name={name} username={username} />
          </FormComposePost>
          )}
    </>

  )
}
