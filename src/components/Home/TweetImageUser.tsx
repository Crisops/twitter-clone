import Image from 'next/image'

interface TweetImageUserProps {
  avatar_url: string
  name: string
  username: string
}

export default async function TweetImageUser ({ avatar_url: avatar, name, username }: TweetImageUserProps) {
  return (
    <div>
      <Image className='rounded-full' src={avatar ?? ''} width={40} height={40} alt={`${name} - @${username}`} />
    </div>
  )
}
