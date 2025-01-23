import { Tables } from '@/types/database.types'
import { getTweetById } from '@/utils/supabase/getTweets'
import TweetContent from '../Home/TweetContent'
import CreateTimePost from './CreateTimePost'
import HeaderPost from './HeaderPost'
import TweetInteractions from '../Home/TweetInteractions'
import { IconBookmark, IconMessageCircle, IconRepeat } from '@tabler/icons-react'
import { IconHeart } from '../Icons'
import FormPostServer from './FormPostServer'
import LoadComments from './LoadComments'
import { Suspense } from 'react'
import LoadingSpinner from '@/components/shared/LoadingSpinner'

interface ViewPostProps {
    idPost: Tables<'tweets'>['id']
}

export default async function ViewPost ({ idPost }: ViewPostProps) {
  const { content, image, comments, likes, retuits, created_at: date, creator } = await getTweetById({ idPost })

  if (!creator) return

  return (
    <section>
      <div className='w-full h-full border-b border-zinc-700'>
        <div className='py-2 px-4'>
          <div>
            <HeaderPost
              id={creator.id}
              name={creator.name}
              username={creator.username}
              avatar_url={creator.avatar_url}
              biography={creator.biography}
              followers={creator.followers}
              following={creator.following}
            />
            <div className='w-full h-full mt-2'>
              <section className='w-full h-full'>
                <TweetContent content={content} image_url={image} className='text-gray-100 text-xl' />
                <CreateTimePost date={date} />
                <div className='border-y-1 border-zinc-800 py-2 my-2'>
                  <TweetInteractions comments={comments} retuits={retuits} likes={likes} idTweet={idPost}>
                    <IconMessageCircle size={24} className='group-hover:stroke-sky-500 transition-colors duration-300 ease-in-out' />
                    <IconRepeat size={24} color='currentColor' className='group-hover:stroke-green-500 transition-colors duration-300 ease-in-out' />
                    <IconHeart className='group-hover:stroke-pink-600 size-7 stroke-2 transition-colors duration-300 ease-in-out' />
                    <IconBookmark size={24} className='group-hover:stroke-sky-500 transition-colors duration-300 ease-in-out' />
                  </TweetInteractions>
                </div>
                <FormPostServer idPost={idPost} />
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-full h-full'>
        <section className='w-full h-full'>
          <Suspense fallback={<LoadingSpinner />}>
            <LoadComments idTweet={idPost} />
          </Suspense>
        </section>
      </div>
    </section>
  )
}
