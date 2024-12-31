import HeaderBack from '@/components/Profile/HeaderBack'
import InformationProfile from '@/components/Profile/InformationProfile'
import ViewInteractivity from '@/components/Profile/ViewInteractivity'
import { getUserProfileByUsername } from '@/utils/supabase/getUser'

interface ProfilePageParams {
    params: {
        username: string
    }
}

export default async function ProfilePage ({ params: { username } }:ProfilePageParams) {
  const { id, avatar_url: avatarUrl, banner_url: bannerUrl, name, created_at: joined } = await getUserProfileByUsername({ username })

  return (
    <section className='h-[200vh] border-r border-zinc-700'>
      <HeaderBack name={name} countPost={0} />
      <InformationProfile idUserVisited={id} avatarUrl={avatarUrl} bannerUrl={bannerUrl} createdAt={joined} />
      <ViewInteractivity />
    </section>
  )
}
