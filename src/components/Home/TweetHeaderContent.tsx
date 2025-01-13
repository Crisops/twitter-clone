import { IconDots } from '@tabler/icons-react'
import { formatTimeTweet } from '@/utils/formatTime'
import Link from 'next/link'
import ToolTipProfile from '../shared/ToolTipProfile'
import { Tables } from '@/types/database.types'

interface TweetHeaderContentProps {
  name: Tables<'users'>['name']
  username: Tables<'users'>['username']
  src: Tables<'users'>['avatar_url']
  biography: Tables<'users'>['biography']
  followers: Tables<'users'>['followers']
  following: Tables<'users'>['following']
  created_at: Tables<'tweets'>['created_at']
}

export default function TweetHeaderContent ({ name, username, src, biography, followers, following, created_at: date }: TweetHeaderContentProps) {
  return (
    <header className='flex items-center justify-between'>
      <div className='flex gap-x-1 items-center [&>div>span]:text-base'>
        <ToolTipProfile
          name={name}
          username={username}
          src={src}
          biography={biography}
          followers={followers}
          following={following}
        >
          <div className='flex items-center gap-x-1'>
            <div>
              <Link href={`/${username}`} className='hover:underline text-white'>
                <span className='text-current font-medium'>{name}</span>
              </Link>
            </div>
            <div>
              <span className='text-zinc-500 font-normal cursor-pointer'>@{username}</span>
            </div>
          </div>
        </ToolTipProfile>
        <div>
          <span className='text-zinc-500 font-normal'>·</span>
        </div>
        <div>
          <span className='text-zinc-500 font-normal'>{formatTimeTweet(date)}</span>
        </div>
      </div>
      <div>
        <IconDots size={20} color='#eee' />
      </div>
    </header>
  )
}
