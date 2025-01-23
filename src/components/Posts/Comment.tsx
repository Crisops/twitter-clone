import React from 'react'
import ToolTipProfile from '../shared/ToolTipProfile'
import TweetImageUser from '../Home/TweetImageUser'
import TweetHeaderContent from '../Home/TweetHeaderContent'
import { Tables } from '@/types/database.types'
import TweetContent from '../Home/TweetContent'

interface CommentsProps {
    id: Tables<'users'>['id']
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

export default function Comment ({ id, name, username, avatarUrl, biography, followers, following, content, imageContent, date }: CommentsProps) {
  return (
    <article className='w-full h-full border-b border-zinc-700'>
      <div className='py-2 pl-2 pr-5 lg:px-4'>
        <div className='flex gap-x-2'>
          <ToolTipProfile
            id={id}
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
              id={id}
              name={name}
              username={username}
              src={avatarUrl}
              biography={biography}
              following={following}
              followers={followers}
              date={date}
            />
            <section className='w-full h-full'>
              <TweetContent content={content} image_url={imageContent} />
            </section>
          </div>
        </div>
      </div>
    </article>
  )
}
