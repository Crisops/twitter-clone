import TweetImageUser from './TweetImageUser'
import TweetHeaderContent from './TweetHeaderContent'
import TweetContent from './TweetContent'
import TweetInteractions from './TweetInteractions'
import { type TweetInfo } from '@/types/querys-db'
import TweetPostType from '@/components/Profile/TweetPostType'
import ToolTipProfile from '@/components/shared/ToolTipProfile'
import { Tables } from '@/types/database.types'
import RedirectWrapperServer from '@/components/shared/RedirectWrapperServer'
import { IconBookmark, IconMessageCircle, IconRepeat } from '@tabler/icons-react'
import { IconHeart } from '../Icons'

interface TweetProps {
  idUser?: Tables<'users'>['id']
  nameUserVisited?: Tables<'users'>['name']
  tweet: TweetInfo
}

export default async function Tweet ({ tweet, idUser, nameUserVisited }: TweetProps) {
  const { id, content, image_url: avatar, likes, retuits, comments, created_at: date, creator, post_type: postType } = tweet

  if (creator === null) return

  return (
    <RedirectWrapperServer slug={`/${creator.username}/status/${id}`}>
      <article className='w-full h-full border-b border-zinc-700'>
        <div className='py-2 px-4'>
          {postType === 'retweet' && <TweetPostType idUserVisited={idUser ?? ''} nameUserVisited={nameUserVisited ?? ''} />}
          <div className='flex gap-x-2'>
            <ToolTipProfile
              id={creator.id}
              name={creator.name}
              username={creator.username}
              src={creator.avatar_url}
              biography={creator.biography}
              following={creator.following}
              followers={creator.followers}
            >
              <TweetImageUser avatar_url={creator.avatar_url} name={creator.name} username={creator.username} />
            </ToolTipProfile>
            <div className='w-full h-full'>
              <TweetHeaderContent
                id={creator.id}
                name={creator.name}
                username={creator.username}
                src={creator.avatar_url}
                biography={creator.biography}
                following={creator.following}
                followers={creator.followers}
                date={date}
              />
              <section className='w-full h-full'>
                <TweetContent content={content} image_url={avatar} />
                <TweetInteractions comments={comments} retuits={retuits} likes={likes} idTweet={id}>
                  <IconMessageCircle size={20} className='group-hover:stroke-sky-500 transition-colors duration-300 ease-in-out' />
                  <IconRepeat size={20} color='currentColor' className='group-hover:stroke-green-500 transition-colors duration-300 ease-in-out' />
                  <IconHeart className='group-hover:stroke-pink-600 size-5 stroke-2 transition-colors duration-300 ease-in-out' />
                  <IconBookmark size={20} className='group-hover:stroke-sky-500 transition-colors duration-300 ease-in-out' />
                </TweetInteractions>
              </section>
            </div>
          </div>
        </div>
      </article>
    </RedirectWrapperServer>
  )
}
