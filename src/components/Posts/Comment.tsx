import { Tables } from '@/types/database.types'
import TweetImageUser from '@/components/Home/TweetImageUser'
import TweetHeaderContent from '@/components/Home/TweetHeaderContent'
import TweetContent from '@/components/Home/TweetContent'
import ToolTipProfile from '@/components/shared/ToolTipProfile'

interface CommentsProps {
    userId: Tables<'users'>['id']
    tweetId: Tables<'users'>['id']
    name: Tables<'users'>['name']
    username: Tables<'users'>['username']
    avatarUrl: Tables<'users'>['avatar_url']
    biography: Tables<'users'>['biography']
    followers: Tables<'users'>['followers']
    following: Tables<'users'>['following']
    content: Tables<'comments'>['content']
    imageContent: Tables<'comments'>['image_url']
    date: Tables<'comments'>['created_at']
}

export default function Comment ({ userId, tweetId, name, username, avatarUrl, biography, followers, following, content, imageContent, date }: CommentsProps) {
  return (
    <article className='w-full h-full border-b border-zinc-700'>
      <div className='py-2 pl-2 pr-5 lg:px-4'>
        <div className='flex gap-x-2'>
          <ToolTipProfile
            id={userId}
            name={name}
            username={username}
            src={avatarUrl}
            biography={biography}
            following={following}
            followers={followers}
          >
            <TweetImageUser avatar_url={avatarUrl} name={name} username={username} />
          </ToolTipProfile>
          <div className='w-full h-full'>
            <TweetHeaderContent
              userId={userId}
              tweetId={tweetId}
              name={name}
              username={username}
              src={avatarUrl}
              biography={biography}
              following={following}
              followers={followers}
              date={date}
              disableOptions
            />
            <section className='w-full h-full'>
              <TweetContent content={content} image_url={imageContent} previewImage='post-tweet' />
            </section>
          </div>
        </div>
      </div>
    </article>
  )
}
