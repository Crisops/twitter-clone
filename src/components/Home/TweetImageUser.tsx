import Image from 'next/image'

interface TweetImageUserProps {
  avatar_url: string
  name: string
  username: string
  width?: number
  height?: number
}

export default async function TweetImageUser ({ avatar_url: avatar, name, username, width = 40, height = 40 }: TweetImageUserProps) {
  return (
    <div>
      <Image className='rounded-full' src={avatar ?? ''} width={width} height={height} alt={`${name} - @${username}`} />
    </div>
  )
}
