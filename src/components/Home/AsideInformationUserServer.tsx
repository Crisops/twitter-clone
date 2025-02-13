import { getSessionAuth, getUserProfile } from '@/utils/supabase/getUser'
import AsideInformationUserClient from '@/components/Home/AsideInformationUserClient'
import TweetImageUser from '@/components/Home/TweetImageUser'

export default async function AsideInformationUserServer () {
  const { id } = await getSessionAuth()
  const { name, username, avatar_url: avatar } = await getUserProfile({ id })

  return (
    <AsideInformationUserClient name={name} username={username}>
      <TweetImageUser avatar_url={avatar ?? ''} name={name} username={username} />
    </AsideInformationUserClient>
  )
}
