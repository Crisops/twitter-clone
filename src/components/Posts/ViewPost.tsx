import { Suspense } from 'react'
import { Tables } from '@/types/database.types'
import { IconBookmark, IconMessageCircle, IconRepeat } from '@tabler/icons-react'
import { getTweetById } from '@/utils/supabase/getTweets'
import { IconHeart } from '@/components/Icons'
import CreateTimePost from '@/components/Posts/CreateTimePost'
import FormPostServer from '@/components/Posts/FormPostServer'
import HeaderPost from '@/components/Posts/HeaderPost'
import LoadComments from '@/components/Posts/LoadComments'
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import TweetContent from '@/components/Home/TweetContent'
import TweetInteractions from '@/components/Home/TweetInteractions'

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
                <div className='border-t min-[500px]:border-b border-zinc-800 pt-2 mt-2 min-[500px]:pb-2 min-[500px]:mb-2'>
                  <TweetInteractions comments={comments} retuits={retuits} likes={likes} idTweet={idPost}>
                    <IconMessageCircle size={24} className='group-hover:stroke-sky-500 transition-colors duration-300 ease-in-out' />
                    <IconRepeat size={24} color='currentColor' className='group-hover:stroke-green-500 transition-colors duration-300 ease-in-out' />
                    <IconHeart className='group-hover:stroke-pink-600 size-7 stroke-2 transition-colors duration-300 ease-in-out' />
                    <IconBookmark size={24} className='group-hover:stroke-sky-500 transition-colors duration-300 ease-in-out' />
                  </TweetInteractions>
                </div>
                <FormPostServer idPost={idPost} className='hidden min-[500px]:flex flex-col w-full h-full px-4 pt-4' />
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
