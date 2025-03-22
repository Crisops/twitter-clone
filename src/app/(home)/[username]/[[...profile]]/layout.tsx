import { ReactNode } from 'react'
import { Tables } from '@/types/database.types'
import ViewInteractivity from '@/components/Profile/ViewInteractivity'

interface UsernameLayoutProps {
  children: ReactNode
  posts: ReactNode
  media: ReactNode
  params: { username: Tables<'users'>['username']}
}

export default function ProfileLayout ({ children, posts, media, params: { username } }: UsernameLayoutProps) {
  return (
    <div className='h-full border-x border-zinc-700'>
      {children}
      <ViewInteractivity posts={posts} media={media} username={username} href={[`/${username}`, `/${username}/media`]} action={['Posts', 'Multimedia']} />
    </div>
  )
}
