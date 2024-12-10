import React from 'react'
import InteractionTweet from './InteractionTweet'
import { IconBookmark, IconHeart, IconMessageCircle, IconRepeat } from '@tabler/icons-react'

export default function TweetInteractions() {
  return (
    <div className='flex justify-between'>
        <div className='flex flex-grow justify-between'>
            <InteractionTweet
                icon={<IconMessageCircle size={20} className='stroke-zinc-600 group-hover:stroke-sky-500 transition-colors duration-300 ease-in-out'/>}
                bgColor='before:hover:bg-sky-500/10'
                textColor='group-hover:text-sky-500'
                quantity={6}
            />
            <InteractionTweet
                icon={<IconRepeat size={20} className='stroke-zinc-600 group-hover:stroke-green-500 transition-colors duration-300 ease-in-out'/>}
                bgColor='before:hover:bg-green-500/10'
                textColor='group-hover:text-green-500'
                quantity={200}
            />
            <InteractionTweet
                icon={<IconHeart size={20} className='stroke-zinc-600 group-hover:stroke-pink-600 transition-colors duration-300 ease-in-out'/>}
                bgColor='before:hover:bg-pink-500/10'
                textColor='group-hover:text-red-500'
                quantity={20}
            />
        </div>
        <div className='flex flex-grow justify-end'>
            <InteractionTweet
                icon={<IconBookmark size={20} className='stroke-zinc-600 group-hover:stroke-sky-500 transition-colors duration-300 ease-in-out'/>}
                bgColor='before:hover:bg-sky-500/10'
                textColor='group-hover:text-sky-500'
            />
        </div>
    </div>
  )
}
