import { Tables } from '@/types/database.types'
import HeaderBackProfile from '@/components/Followers/HeaderBackProfile'
import ViewAllFollowers from '@/components/Followers/ViewAllFollowers'

interface FollowersPageProps {
  params: {
    username: Tables<'users'>['username']
  }
}

export default function FollowingPage ({ params: { username } }:FollowersPageProps) {
  return (
    <div className='w-full h-full'>
      <HeaderBackProfile username={username} />
      <ViewAllFollowers username={username} filterColumn='user_id_follower' columnRelation='followers_user_id_following_fkey' />
    </div>
  )
}
