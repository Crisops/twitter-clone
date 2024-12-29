import TweetImageUser from '@/components/Home/TweetImageUser'
import DrawerHeaderClient from './DrawerHeaderClient'
import { getSessionAuth, getUserProfile } from '@/utils/supabase/getUser'

async function DrawerHeaderServer () {
  const { id } = await getSessionAuth()
  const { name, username, avatar_url: avatar } = await getUserProfile({ id })

  return (
    <DrawerHeaderClient>
      <TweetImageUser avatar_url={avatar ?? ''} name={name} username={username} width={30} height={30} />
    </DrawerHeaderClient>
  )
}

export default DrawerHeaderServer
