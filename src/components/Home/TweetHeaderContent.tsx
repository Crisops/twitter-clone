import { IconDots } from '@tabler/icons-react'
import Link from 'next/link'
import ToolTipProfile from '../shared/ToolTipProfile'
import { Tables } from '@/types/database.types'
import TweetCreatedTime from '../shared/TweetCreatedTime'

interface TweetHeaderContentProps {
  id: Tables<'users'>['id']
  name: Tables<'users'>['name']
  username: Tables<'users'>['username']
  src: Tables<'users'>['avatar_url']
  biography: Tables<'users'>['biography']
  followers: Tables<'users'>['followers']
  following: Tables<'users'>['following']
  date: Tables<'tweets'>['created_at'] | Tables<'comments'>['created_at']
}

export default function TweetHeaderContent ({ id: idUserCreatorTweet, name, username, src, biography, followers, following, date }: TweetHeaderContentProps) {
  return (
    <header className='flex items-center justify-between' data-no-redirect>
      <div className='flex gap-x-1 items-center [&>div>span]:text-base'>
        <div className='flex items-center gap-x-1'>
          <div className='max-w-28 sm:max-w-56 lg:max-w-full'>
            <ToolTipProfile
              id={idUserCreatorTweet}
              name={name}
              username={username}
              src={src}
              biography={biography}
              followers={followers}
              following={following}
            >
              <Link href={`/${username}`} className='hover:underline text-white'>
                <span className='text-current font-medium'>{name}</span>
              </Link>
            </ToolTipProfile>
          </div>
          <ToolTipProfile
            id={idUserCreatorTweet}
            name={name}
            username={username}
            src={src}
            biography={biography}
            followers={followers}
            following={following}
          >
            <div>
              <span className='text-zinc-500 font-normal cursor-pointer'>@{username}</span>
            </div>
          </ToolTipProfile>
        </div>
        <TweetCreatedTime date={date} />
      </div>
      <div>
        <IconDots size={20} color='#eee' />
      </div>
    </header>
  )
}
