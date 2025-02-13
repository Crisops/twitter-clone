import { Children, ReactNode } from 'react'
import { Tables } from '@/types/database.types'
import { insertRetweet, deleteRetweet, insertLikes, deleteLikes } from '@/actions/actions'
import { getLikes, getRetweets } from '@/utils/supabase/getInterations'
import { getSessionAuth } from '@/utils/supabase/getUser'
import InteractionTweet from '@/components/Home/InteractionTweet'

interface TweetInteractionsProps {
  idTweet: Tables<'tweets'>['id']
  likes: Tables<'tweets'>['likes']
  retuits: Tables<'tweets'>['retuits']
  comments: Tables<'tweets'>['comments']
  children?: ReactNode[]
}

export default async function TweetInteractions ({ idTweet, comments, retuits, likes, children }:TweetInteractionsProps) {
  const { id } = await getSessionAuth()

  const dataRetweets = await getRetweets({ userId: id, tweetId: idTweet })
  const dataLikes = await getLikes({ userId: id, tweetId: idTweet })

  const [IconMessageCircle, IconRepeat, IconHeart, IconBookmark] = Children.toArray(children)

  return (
    <div className='flex justify-between' data-no-redirect>
      <div className='flex flex-grow justify-between'>
        <InteractionTweet
          icon={IconMessageCircle}
          bgColor='group-hover:before:bg-sky-500/10'
          textColor='text-sky-500'
          textColorHover='group-hover:text-sky-500'
          quantity={comments}
          idUser={id}
          idTweet={idTweet}
        />
        <InteractionTweet
          icon={IconRepeat}
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
          icon={IconHeart}
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
          icon={IconBookmark}
          bgColor='group-hover:before:bg-sky-500/10'
          textColor='text-sky-500'
          textColorHover='group-hover:text-sky-500'
          idUser={id}
          idTweet={idTweet}
        />
      </div>
    </div>
  )
}
