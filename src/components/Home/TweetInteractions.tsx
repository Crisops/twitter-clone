import { getSessionAuth } from '@/utils/supabase/getUser'
import InteractionTweet from './InteractionTweet'
import { IconBookmark, IconMessageCircle, IconRepeat } from '@tabler/icons-react'
import { getLikes, getRetweets } from '@/utils/supabase/getInterations'
import { insertRetweet, deleteRetweet, insertLikes, deleteLikes } from '@/actions/actions'
import { IconHeart } from '../Icons'
import { Tables } from '@/types/database.types'

interface TweetInteractionsProps {
  idTweet: Tables<'tweets'>['id']
  likes: Tables<'tweets'>['likes']
  retuits: Tables<'tweets'>['retuits']
  comments: Tables<'tweets'>['comments']
}

export default async function TweetInteractions ({ idTweet, comments, retuits, likes }:TweetInteractionsProps) {
  const { id } = await getSessionAuth()

  const dataRetweets = await getRetweets({ userId: id, tweetId: idTweet })
  const dataLikes = await getLikes({ userId: id, tweetId: idTweet })

  return (
    <div className='pt-2'>
      <div className='flex justify-between'>
        <div className='flex flex-grow justify-between'>
          <InteractionTweet
            icon={<IconMessageCircle size={20} className='group-hover:stroke-sky-500 transition-colors duration-300 ease-in-out' />}
            bgColor='group-hover:before:bg-sky-500/10'
            textColor='text-sky-500'
            textColorHover='group-hover:text-sky-500'
            quantity={comments}
            idUser={id}
            idTweet={idTweet}
          />
          <InteractionTweet
            icon={<IconRepeat size={20} color='currentColor' className='group-hover:stroke-green-500 transition-colors duration-300 ease-in-out' />}
            bgColor='group-hover:before:bg-green-500/10'
            textColor='text-green-500'
            textColorHover='group-hover:text-green-500'
            quantity={retuits}
            idUser={id}
            idTweet={idTweet}
            data={dataRetweets}
            insertData={insertRetweet}
            deleteData={deleteRetweet}
          />
          <InteractionTweet
            icon={<IconHeart className='group-hover:stroke-pink-600 size-5 stroke-2 transition-colors duration-300 ease-in-out' />}
            bgColor='group-hover:before:bg-pink-500/10'
            textColor='text-pink-600'
            textColorHover='group-hover:text-red-500'
            quantity={likes}
            idUser={id}
            idTweet={idTweet}
            data={dataLikes}
            insertData={insertLikes}
            deleteData={deleteLikes}
          />
        </div>
        <div className='flex w-1/4 justify-end'>
          <InteractionTweet
            icon={<IconBookmark size={20} className='group-hover:stroke-sky-500 transition-colors duration-300 ease-in-out' />}
            bgColor='group-hover:before:bg-sky-500/10'
            textColor='text-sky-500'
            textColorHover='group-hover:text-sky-500'
            idUser={id}
            idTweet={idTweet}
          />
        </div>
      </div>
    </div>

  )
}
