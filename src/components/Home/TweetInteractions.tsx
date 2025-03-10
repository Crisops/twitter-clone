import { Children, ReactNode } from 'react'
import { Tables } from '@/types/database.types'
import { insertRetweet, deleteRetweet, insertLikes, deleteLikes } from '@/actions/actions'
import { getLikes, getRetweets } from '@/utils/supabase/getInterations'
import { getSessionAuth } from '@/utils/supabase/getUser'
import ButtonInteraction from '@/components/Home/ButtonInteraction'

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
        <ButtonInteraction
          icon={IconMessageCircle}
          className='group-hover/effect:before:absolute group-hover/effect:before:w-9 group-hover/effect:before:h-9 group-hover/effect:before:bg-sky-500/10 group-hover/effect:before:rounded-full group-hover/effect:before:-translate-x-0'
          textColor='text-sky-500'
          quantity={comments}
          idUser={id}
          idTweet={idTweet}
        />
        <ButtonInteraction
          icon={IconRepeat}
          className='group-hover/effect:before:absolute group-hover/effect:before:w-9 group-hover/effect:before:h-9 group-hover/effect:before:bg-green-500/10 group-hover/effect:before:rounded-full'
          textColor='text-green-500'
          quantity={retuits}
          idUser={id}
          idTweet={idTweet}
          data={dataRetweets}
          insertData={insertRetweet}
          deleteData={deleteRetweet}
        />
        <ButtonInteraction
          icon={IconHeart}
          className='group-hover/effect:before:absolute group-hover/effect:before:w-9 group-hover/effect:before:h-9 group-hover/effect:before:bg-pink-500/10 group-hover/effect:before:rounded-full'
          textColor='text-pink-600'
          quantity={likes}
          idUser={id}
          idTweet={idTweet}
          data={dataLikes}
          insertData={insertLikes}
          deleteData={deleteLikes}
        />
      </div>
      <div className='flex w-1/4 justify-end'>
        <ButtonInteraction
          className='group-hover/effect:before:absolute group-hover/effect:before:w-9 group-hover/effect:before:h-9 group-hover/effect:before:bg-sky-500/10 group-hover/effect:before:rounded-full'
          icon={IconBookmark}
          textColor='text-sky-500'
          idUser={id}
          idTweet={idTweet}
        />
      </div>
    </div>
  )
}
