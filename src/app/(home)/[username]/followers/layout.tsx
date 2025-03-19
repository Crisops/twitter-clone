import { ReactNode } from 'react'

interface UsernameLayoutProps {
  children: ReactNode
}

export default async function FollowersLayout ({ children }: UsernameLayoutProps) {
  return (
    <section className='h-full border-x border-zinc-700'>
      {children}
    </section>
  )
}
