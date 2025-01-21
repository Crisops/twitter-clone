import { Tables } from '@/types/database.types'
import { Tooltip } from '@nextui-org/react'
import { ReactNode } from 'react'
import CardProfile from './CardProfile'

interface ToolTipProfileProps {
    id: Tables<'users'>['id']
    name: Tables<'users'>['name']
    username: Tables<'users'>['username']
    src: Tables<'users'>['avatar_url']
    biography: Tables<'users'>['biography']
    following: Tables<'users'>['following']
    followers: Tables<'users'>['followers']
    children: ReactNode
}

export default function ToolTipProfile ({ id, name, username, src, biography, following, followers, children }:ToolTipProfileProps) {
  return (
    <Tooltip
      delay={800}
      closeDelay={200}
      placement='bottom'
      classNames={{ content: 'bg-black p-1 shadow-[0px_0px_10px_#676767]' }}
      content={<CardProfile id={id} name={name} username={username} src={src} biography={biography} following={following} followers={followers} />}
    >
      <div className='h-max shrink-0 truncate'>
        {children}
      </div>
    </Tooltip>
  )
}
