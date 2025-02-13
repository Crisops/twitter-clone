import { Tables } from '@/types/database.types'
import ViewAllFollowers from '@/components/Followers/ViewAllFollowers'
import HeaderBackProfile from '@/components/Followers/HeaderBackProfile'

interface FollowersPageProps {
  params: {
    username: Tables<'users'>['username']
  }
}

export default function FollowersPage ({ params: { username } }:FollowersPageProps) {
  return (
    <div className='w-full h-full'>
      <HeaderBackProfile username={username} />
      <ViewAllFollowers username={username} filterColumn='user_id_following' columnRelation='followers_user_id_follower_fkey' />
    </div>
  )
}
