import ViewInteractivity from '@/components/Profile/ViewInteractivity'
import { ReactNode } from 'react'

interface ProfileLayoutProps {
  children: ReactNode
  posts: ReactNode
  media: ReactNode
  params: { profile: string[]}
}

export default function ProfileLayout ({ children, posts, media, params: { profile } }:ProfileLayoutProps) {
  const [username] = profile

  return (
    <section className='h-[200vh] border-r border-zinc-700'>
      {children}
      <ViewInteractivity posts={posts} media={media} username={username} />
    </section>
  )
}
