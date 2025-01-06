import InteractionTweet from './InteractionTweet'
import { IconBookmark, IconHeart, IconMessageCircle, IconRepeat } from '@tabler/icons-react'

interface TweetInteractionsProps {
    likes: number
    retuits: number
    comments: number
}

export default function TweetInteractions ({ comments, retuits, likes }:TweetInteractionsProps) {
  return (
    <div className='flex justify-between'>
      <div className='flex flex-grow justify-between'>
        <InteractionTweet
          icon={<IconMessageCircle size={20} className='stroke-zinc-600 group-hover:stroke-sky-500 transition-colors duration-300 ease-in-out' />}
          bgColor='group-hover:before:bg-sky-500/10'
          textColor='group-hover:text-sky-500'
          quantity={comments}
        />
        <InteractionTweet
          icon={<IconRepeat size={20} className='stroke-zinc-600 group-hover:stroke-green-500 transition-colors duration-300 ease-in-out' />}
          bgColor='group-hover:before:bg-green-500/10'
          textColor='group-hover:text-green-500'
          quantity={retuits}
        />
        <InteractionTweet
          icon={<IconHeart size={20} className='stroke-zinc-600 group-hover:stroke-pink-600 transition-colors duration-300 ease-in-out' />}
          bgColor='group-hover:before:bg-pink-500/10'
          textColor='group-hover:text-red-500'
          quantity={likes}
        />
      </div>
      <div className='flex w-1/4 justify-end'>
        <InteractionTweet
          icon={<IconBookmark size={20} className='stroke-zinc-600 group-hover:stroke-sky-500 transition-colors duration-300 ease-in-out' />}
          bgColor='group-hover:before:bg-sky-500/10'
          textColor='group-hover:text-sky-500'
        />
      </div>
    </div>
  )
}
