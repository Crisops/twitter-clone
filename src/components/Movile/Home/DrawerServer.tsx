import { getSessionAuth, getUserProfile } from '@/utils/supabase/getUser'
import AsideNavigation from '@/components/Home/AsideNavigation'
import DrawerClient from '@/components/Movile/Home/DrawerClient'
import DrawerHeader from '@/components/Movile/Home/DrawerHeader'
import LinkProfileServer from '@/components/Home/LinkProfileServer'
import TweetImageUser from '@/components/Home/TweetImageUser'

async function DrawerServer () {
  const { id } = await getSessionAuth()
  const { name, username, avatar_url: avatar } = await getUserProfile({ id })

  return (
    <DrawerClient>
      <DrawerHeader avatar={<TweetImageUser avatar_url={avatar ?? ''} name={name} username={username} width={40} height={40} />} name={name} username={username} />
      <AsideNavigation viewMovil LinkProfile={<LinkProfileServer viewMovil />} />
      <TweetImageUser avatar_url={avatar ?? ''} name={name} username={username} width={30} height={30} />
    </DrawerClient>
  )
}

export default DrawerServer
