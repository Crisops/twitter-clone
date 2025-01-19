import { getSessionAuth, getUserProfile } from '@/utils/supabase/getUser'
import FormPostClient from './FormPostClient'
import TweetImageUser from '../Home/TweetImageUser'

export default async function FormPostServer () {
  const { id } = await getSessionAuth()
  const { name, username, avatar_url: avatar } = await getUserProfile({ id })
  return (
    <FormPostClient idSession={id}>
      <TweetImageUser avatar_url={avatar} name={name} username={username} />
    </FormPostClient>
  )
}
