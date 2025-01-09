import HeaderBack from '@/components/Profile/HeaderBack'
import InformationProfile from '@/components/Profile/InformationProfile'
import { getUserProfileByUsername } from '@/utils/supabase/getUser'

interface ProfilePageParams {
    params: {
        profile: string
    }
}

export default async function ProfilePage ({ params: { profile: [username] } }:ProfilePageParams) {
  const { id, username: usernameUser, biography, followers, following, location, web_site: webSite, avatar_url: avatarUrl, banner_url: bannerUrl, name, created_at: joined } = await getUserProfileByUsername({ username })

  return (
    <>
      <HeaderBack name={name} id={id} />
      <InformationProfile
        idUserVisited={id}
        name={name}
        username={usernameUser}
        biography={biography}
        followers={followers}
        following={following}
        location={location}
        webSite={webSite}
        avatarUrl={avatarUrl}
        bannerUrl={bannerUrl}
        createdAt={joined}
      />
    </>
  )
}
