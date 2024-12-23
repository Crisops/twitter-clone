import AsideInformationUserClient from './AsideInformationUserClient'
import { getSessionAuth, getUserProfile } from '@/utils/supabase/getUser'
import TweetImageUser from './TweetImageUser'

export default async function AsideInformationUserServer() {

    const {id} = await getSessionAuth()
    const { name, username } = await getUserProfile({ id })

  return (
    <AsideInformationUserClient name={name} username={username}>
        <TweetImageUser/>
    </AsideInformationUserClient>
  )
}
