import { getSessionAuth, getUserProfile } from '@/utils/supabase/getUser'
import FormComposePost from '@/components/Home/FormComposePost'
import FormTweetClient from '@/components/Home/FormTweet.Client'
import TweetImageUser from '@/components/Home/TweetImageUser'

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
