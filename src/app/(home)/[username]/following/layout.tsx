import { ReactNode } from 'react'

interface UsernameLayoutProps {
  children: ReactNode
}

export default async function FollowingLayout ({ children }: UsernameLayoutProps) {
  return (
    <section className='h-full border-r border-zinc-700'>
      {children}
    </section>
  )
}
