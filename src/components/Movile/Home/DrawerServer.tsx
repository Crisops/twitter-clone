import { getSessionAuth, getUserProfile } from '@/utils/supabase/getUser'
import AsideNavigation from '@/components/Home/AsideNavigation'
import DrawerClient from '@/components/Movile/Home/DrawerClient'
import DrawerHeader from '@/components/Movile/Home/DrawerHeader'
import LinkProfileServer from '@/components/Home/LinkProfileServer'
import TweetImageUser from '@/components/Home/TweetImageUser'

async function DrawerServer () {
  const { id } = await getSessionAuth()
  const { name, username, avatar_url: avatar, followers, following } = await getUserProfile({ id })

  return (
    <DrawerClient>
      <DrawerHeader avatar={<TweetImageUser avatar_url={avatar ?? ''} name={name} username={username} />} name={name} username={username} followers={followers ?? 0} following={following ?? 0} />
      <AsideNavigation viewMovil LinkProfile={<LinkProfileServer viewMovil />} />
      <TweetImageUser size='sm' avatar_url={avatar ?? ''} name={name} username={username} />
    </DrawerClient>
  )
}

export default DrawerServer
