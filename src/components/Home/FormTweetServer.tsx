import { getSessionAuth, getUserProfile } from '@/utils/supabase/getUser'
import FormTweetClient from './FormTweet.Client'
import TweetImageUser from './TweetImageUser'

export default async function FormTweetServer () {
  const { id } = await getSessionAuth()
  const { name, username, avatar_url: avatar } = await getUserProfile({ id })

  return (
    <FormTweetClient idSession={id}>
      <TweetImageUser avatar_url={avatar ?? ''} name={name} username={username} />
    </FormTweetClient>
  )
}
