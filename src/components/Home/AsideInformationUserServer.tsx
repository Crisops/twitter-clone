import AsideInformationUserClient from './AsideInformationUserClient'
import { getSessionAuth, getUserProfile } from '@/utils/supabase/getUser'
import TweetImageUser from './TweetImageUser'

export default async function AsideInformationUserServer () {
  const { id } = await getSessionAuth()
  const { name, username, avatar_url: avatar } = await getUserProfile({ id })

  return (
    <AsideInformationUserClient name={name} username={username}>
      <TweetImageUser avatar_url={avatar ?? ''} name={name} username={username} />
    </AsideInformationUserClient>
  )
}
