import { Tables } from '@/types/database.types'
import Link from 'next/link'

interface FollowersProps {
  username: Tables<'users'>['username']
  followers:Tables<'users'>['followers']
  following:Tables<'users'>['following']
}

function Followers ({ username, followers, following }: FollowersProps) {
  return (
    <div className='flex items-center gap-5'>
      <Link className='hover:underline space-x-1' href={`/${username}/following`}>
        <span className='text-white font-bold text-base'>{following}</span>
        <span className='text-zinc-500 text-base'>Siguiendo</span>
      </Link>
      <Link className='hover:underline space-x-1' href={`/${username}/followers`}>
        <span className='text-white font-bold text-base'>{followers}</span>
        <span className='text-zinc-500 text-base'>Seguidores</span>
      </Link>
    </div>
  )
}

export default Followers
