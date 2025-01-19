import { Tables } from '@/types/database.types'
import { formatTimeTweet } from '@/utils/formatTime'

interface TweetCreatedTimeProps {
    date: Tables<'tweets'>['created_at']
}

export default function TweetCreatedTime ({ date }: TweetCreatedTimeProps) {
  return (
    <>
      <div>
        <span className='text-zinc-500 font-normal'>·</span>
      </div>
      <div>
        <span className='text-zinc-500 font-normal'>{formatTimeTweet(date)}</span>
      </div>
    </>
  )
}
