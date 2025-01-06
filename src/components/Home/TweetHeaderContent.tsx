import { IconDots } from '@tabler/icons-react'
import { formatTimeTweet } from '@/utils/formatTime'
import Link from 'next/link'

interface TweetHeaderContentProps {
    name: string
    username: string
    created_at: string
}

export default function TweetHeaderContent ({ name, username, created_at: date }: TweetHeaderContentProps) {
  return (
    <header className='flex items-center justify-between'>
      <div className='flex gap-x-1 items-center [&>div>span]:text-base'>
        <div>
          <Link href={`/${username}`} className='hover:underline text-white'>
            <span className='text-current font-medium'>{name}</span>
          </Link>
        </div>
        <div>
          <span className='text-zinc-500 font-normal'>@{username}</span>
        </div>
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
