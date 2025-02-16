import { Metadata } from 'next'
import { Tables } from '@/types/database.types'
import { getUserProfileByUsername } from '@/utils/supabase/getUser'
import InformationProfile from '@/components/Profile/InformationProfile'
import HeaderBack from '@/components/shared/HeaderBack'

interface ProfilePageProps {
  params: {
    username: Tables<'users'>['username']
  }
}

export async function generateMetadata ({ params: { username } }: ProfilePageProps): Promise<Metadata> {
  const { name, username: alias, biography, avatar_url: avatar } = await getUserProfileByUsername({ username })

  return {
    title: `${name} (@${alias}) / Twitter Clone`,
    description: `${biography} - Twitter clone elaborado con Next Js`,
    openGraph: {
      type: 'profile',
      title: `${name} (@${alias}) / Twitter Clone`,
      description: `http://localhost:3000/${alias}`,
      url: `http://localhost:3000/${alias}`,
      siteName: 'Twitter Clone',
      images: [
        {
          url: `${avatar}`,
          width: 800,
          height: 800,
          alt: `${name} - (@${username})`
        }
      ]
    }
  }
}

export default async function ProfilePage ({ params: { username } }:ProfilePageProps) {
  const { id, username: usernameUser, biography, followers, following, location, web_site: webSite, avatar_url: avatarUrl, banner_url: bannerUrl, name, created_at: joined } = await getUserProfileByUsername({ username })

  return (
    <section>
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
    </section>
  )
}
