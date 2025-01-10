import ViewInteractivity from '@/components/Profile/ViewInteractivity'
import ErrorAccount from '@/components/shared/ErrorAccount'
import ErrorBoundary from '@/components/shared/ErrorBoundary'
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
    <section className='h-full border-r border-zinc-700'>
      <ErrorBoundary fallback={<ErrorAccount username={username} />}>
        {children}
        <ViewInteractivity posts={posts} media={media} username={username} />
      </ErrorBoundary>
    </section>
  )
}
