import ViewInteractivity from '@/components/Profile/ViewInteractivity'
import { Tables } from '@/types/database.types'
import { ReactNode } from 'react'

interface UsernameLayoutProps {
  children: ReactNode
  posts: ReactNode
  media: ReactNode
  params: { username: Tables<'users'>['username']}
}

export default function ProfileLayout ({ children, posts, media, params: { username } }: UsernameLayoutProps) {
  return (
    <div className='h-full border-r border-zinc-700'>
      {children}
      <ViewInteractivity posts={posts} media={media} username={username} />
    </div>
  )
}
