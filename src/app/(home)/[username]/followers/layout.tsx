import { ReactNode } from 'react'

interface UsernameLayoutProps {
  children: ReactNode
}

export default async function FollowersLayout ({ children }: UsernameLayoutProps) {
  return (
    <section className='h-full min-[500px]:border-x min-[500px]:border-zinc-700'>
      {children}
    </section>
  )
}
