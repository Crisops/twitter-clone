import { Tables } from '@/types/database.types'
import { TableRelationships } from '@/types/generics'
import { getFollowersUserData } from '@/utils/supabase/getFollowers'
import { getUserProfileByUsername } from '@/utils/supabase/getUser'
import CardFollower from '@/components/Followers/CardFollower'

interface ViewAllFollowersProps {
    username: Tables<'users'>['username']
    filterColumn: keyof Tables<'followers'>
    columnRelation: TableRelationships<'followers'>
}

export default async function ViewAllFollowers ({ username, filterColumn, columnRelation }: ViewAllFollowersProps) {
  const { id: idUser } = await getUserProfileByUsername({ username })
  const followers = await getFollowersUserData({ idUser, filterColumn, columnRelation })

  return (
    <div className='w-full'>
      {followers.map(({ user }) => (
        <CardFollower
          key={user.id}
          idUserVisited={idUser}
          idUserCard={user.id}
          name={user.name}
          username={user.username}
          src={user.src}
          biography={user.biography}
          followers={user.followers}
          following={user.following}
        />
      )
      )}
    </div>
  )
}
