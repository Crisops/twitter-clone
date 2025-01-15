import HeaderBackProfile from '@/components/Followers/HeaderBackProfile'
import { Tables } from '@/types/database.types'

interface FollowersPageProps {
  params: {
    username: Tables<'users'>['username']
  }
}

export default function FollowersPage ({ params: { username } }:FollowersPageProps) {
  return (
    <div className='w-full h-full'>
      <HeaderBackProfile username={username} />
    </div>
  )
}
