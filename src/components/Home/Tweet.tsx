import { IconBookmark, IconMessageCircle, IconRepeat } from '@tabler/icons-react'
import { Tables } from '@/types/database.types'
import { type TweetInfo } from '@/types/querys-db'
import { IconHeart } from '@/components/Icons'
import RedirectWrapperServer from '@/components/shared/RedirectWrapperServer'
import TweetImageUser from '@/components/Home/TweetImageUser'
import TweetHeaderContent from '@/components/Home/TweetHeaderContent'
import TweetContent from '@/components/Home/TweetContent'
import TweetInteractions from '@/components/Home/TweetInteractions'
import TweetPostType from '@/components/Profile/TweetPostType'
import ToolTipProfile from '@/components/shared/ToolTipProfile'

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
        <div className='py-2 pl-2 pr-5 lg:px-4'>
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
                userId={creator.id}
                tweetId={id}
                name={creator.name}
                username={creator.username}
                src={creator.avatar_url}
                biography={creator.biography}
                following={creator.following}
                followers={creator.followers}
                date={date}
              />
              <section className='w-full h-full'>
                <TweetContent idPost={tweet.id} username={creator.username} content={content} image_url={avatar} />
                <TweetInteractions comments={comments} retuits={retuits} likes={likes} idTweet={id} interactionComment='create-post'>
                  <IconMessageCircle size={20} className='group-hover/effect:stroke-sky-500 transition-colors duration-300 ease-in-out' />
                  <IconRepeat size={20} color='currentColor' className='group-hover/effect:stroke-green-500 transition-colors duration-300 ease-in-out' />
                  <IconHeart className='group-hover/effect:stroke-pink-600 stroke-current size-5 stroke-2 transition-colors duration-300 ease-in-out' />
                  <IconBookmark size={20} className='group-hover/effect:stroke-sky-500 transition-colors duration-300 ease-in-out' />
                </TweetInteractions>
              </section>
            </div>
          </div>
        </div>
      </article>
    </RedirectWrapperServer>
  )
}
