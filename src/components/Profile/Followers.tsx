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
      <div>
        <Link className='hover:underline' href={`/${username}/following`}>
          <div className='flex justify-center items-center gap-1'>
            <span className='text-white font-bold text-base'>{following}</span>
            <span className='text-zinc-500 text-base'>Siguiendo</span>
          </div>
        </Link>
      </div>
      <div>
        <Link className='hover:underline' href={`/${username}/followers`}>
          <div className='flex justify-center items-center gap-1'>
            <span className='text-white font-bold text-base'>{followers}</span>
            <span className='text-zinc-500 text-base'>Seguidores</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Followers
