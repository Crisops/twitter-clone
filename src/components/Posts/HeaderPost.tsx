import { Tables } from '@/types/database.types'
import { IconDots } from '@tabler/icons-react'
import Link from 'next/link'
import ToolTipProfile from '@/components/shared/ToolTipProfile'
import TweetImageUser from '@/components/Home/TweetImageUser'

interface HeaderProps {
    id: Tables<'users'>['id']
    name: Tables<'users'>['name']
    username: Tables<'users'>['username']
    avatar_url: Tables<'users'>['avatar_url']
    biography: Tables<'users'>['biography']
    followers: Tables<'users'>['followers']
    following: Tables<'users'>['following']
}

export default function HeaderPost ({ id, name, username, avatar_url: avatar, biography, followers, following }: HeaderProps) {
  return (
    <header className='w-full h-fit'>
      <div className='flex justify-between'>
        <div className='w-full'>
          <div className='flex gap-x-2'>
            <ToolTipProfile
              id={id}
              name={name}
              username={username}
              src={avatar}
              biography={biography}
              following={following}
              followers={followers}
            >
              <TweetImageUser avatar_url={avatar} name={name} username={username} />
            </ToolTipProfile>
            <div className='flex flex-col items-start justify-center gap-1'>
              <Link href={`/${username}`}>
                <ToolTipProfile
                  id={id}
                  name={name}
                  username={username}
                  src={avatar}
                  biography={biography}
                  following={following}
                  followers={followers}
                >
                  <h4 className='text-base font-semibold leading-none text-gray-100 hover:underline'>{name}</h4>
                </ToolTipProfile>
                <ToolTipProfile
                  id={id}
                  name={name}
                  username={username}
                  src={avatar}
                  biography={biography}
                  following={following}
                  followers={followers}
                >
                  <h4 className='text-base tracking-tight text-zinc-500'>@{username}</h4>
                </ToolTipProfile>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <IconDots size={20} className='stroke-zinc-500' />
        </div>
      </div>
    </header>
  )
}
