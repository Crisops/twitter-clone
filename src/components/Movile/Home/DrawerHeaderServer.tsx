import TweetImageUser from '@/components/Home/TweetImageUser'
import DrawerHeaderClient from './DrawerHeaderClient'
import { getSessionAuth, getUserProfile } from '@/utils/supabase/getUser'
import DrawerHeaderContentClient from './DrawerHeaderContentClient'

async function DrawerHeaderServer () {
  const { id } = await getSessionAuth()
  const { name, username, avatar_url: avatar } = await getUserProfile({ id })

  return (
    <DrawerHeaderClient
      DrawerHeaderContentClient={
        <DrawerHeaderContentClient
          avatar={<TweetImageUser avatar_url={avatar ?? ''} name={name} username={username} width={40} height={40} />}
          name={name}
          username={username}
        />
      }
    >
      <TweetImageUser avatar_url={avatar ?? ''} name={name} username={username} width={30} height={30} />
    </DrawerHeaderClient>
  )
}

export default DrawerHeaderServer
