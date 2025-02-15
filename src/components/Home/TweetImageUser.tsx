import { Tables } from '@/types/database.types'
import Image from 'next/image'

interface TweetImageUserProps {
  avatar_url: Tables<'users'>['avatar_url']
  name: Tables<'users'>['name']
  username: Tables<'users'>['username']
  width?: number
  height?: number
}

export default function TweetImageUser ({ avatar_url: avatar, name, username, width = 40, height = 40 }: TweetImageUserProps) {
  return (
    <div>
      <Image className='rounded-full transition-all duration-150 ease-out cursor-pointer hover:brightness-90' src={avatar ?? ''} width={width} height={height} alt={`${name} - @${username}`} />
    </div>
  )
}
