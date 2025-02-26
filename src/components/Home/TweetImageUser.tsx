import { Tables } from '@/types/database.types'
import { Avatar } from '@heroui/react'

interface TweetImageUserProps {
  avatar_url: Tables<'users'>['avatar_url']
  name: Tables<'users'>['name']
  username: Tables<'users'>['username']
}

export default function TweetImageUser ({ avatar_url: avatar, name, username }: TweetImageUserProps) {
  return (
    <Avatar size='md' className='transition-all duration-150 ease-out cursor-pointer hover:brightness-90' src={avatar ?? ''} alt={`${name} - @${username}`} />
  )
}
