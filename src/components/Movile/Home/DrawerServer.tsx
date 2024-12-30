import TweetImageUser from '@/components/Home/TweetImageUser'
import DrawerClient from './DrawerClient'
import { getSessionAuth, getUserProfile } from '@/utils/supabase/getUser'
import DrawerHeader from './DrawerHeader'
import LinkProfile from '@/components/Home/LinkProfile'

async function DrawerServer () {
  const { id } = await getSessionAuth()
  const { name, username, avatar_url: avatar } = await getUserProfile({ id })

  return (
    <DrawerClient
      DrawerHeader={
        <DrawerHeader
          avatar={<TweetImageUser avatar_url={avatar ?? ''} name={name} username={username} width={40} height={40} />}
          name={name}
          username={username}
        />
      }
      LinkProfile={<LinkProfile viewMovil />}
    >
      <TweetImageUser avatar_url={avatar ?? ''} name={name} username={username} width={30} height={30} />
    </DrawerClient>
  )
}

export default DrawerServer
