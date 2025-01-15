import { ReactNode } from 'react'

interface UsernameLayoutProps {
  children: ReactNode
}

export default async function FollowersLayout ({ children }: UsernameLayoutProps) {
  return (
    <main className='h-full border-r border-zinc-700'>
      {children}
    </main>
  )
}
