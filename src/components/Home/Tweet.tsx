import TweetImageUser from './TweetImageUser'
import TweetHeaderContent from './TweetHeaderContent'
import TweetContent from './TweetContent'
import TweetInteractions from './TweetInteractions'
import { type TweetInfo } from '@/types/querys-db'
import TweetPostType from '../Profile/TweetPostType'

interface TweetProps {
  idUser?: string
  nameUserVisited?: string
  tweet: TweetInfo
}

export default function Tweet ({ tweet, idUser, nameUserVisited }: TweetProps) {
  const { content, image_url: avatar, likes, retuits, comments, created_at: date, creator, post_type: postType } = tweet

  if (creator === null) return

  return (
    <article className='w-full h-full border-b border-zinc-700'>
      <div className='py-2 px-4'>
        {postType === 'retweet' && <TweetPostType idUserVisited={idUser ?? ''} nameUserVisited={nameUserVisited ?? ''} />}
        <div className='flex gap-x-2'>
          <TweetImageUser avatar_url={creator.avatar_url ?? ''} name={creator.name} username={creator.username} />
          <div className='w-full h-full'>
            <TweetHeaderContent name={creator.name} username={creator.username} created_at={date} />
            <section className='w-full h-full'>
              <TweetContent content={content} image_url={avatar ?? ''} />
              <div className='pt-2'>
                <TweetInteractions comments={comments} retuits={retuits} likes={likes} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </article>
  )
}
