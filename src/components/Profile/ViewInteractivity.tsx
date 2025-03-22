'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { Tables } from '@/types/database.types'
import Link from 'next/link'

interface ViewInteractivityProps {
  posts: ReactNode
  media: ReactNode
  username: Tables<'users'>['username']
}

function ViewInteractivity ({ username, posts, media }: ViewInteractivityProps) {
  const pathname = usePathname()

  return (
    <>
      <div className='w-full border-b border-zinc-700'>
        <div className='flex [&>div]:flex-grow [&>div]:flex [&>div]:justify-center [&>div]:items-center'>
          <div className='relative'>
            <Link className='w-full h-full py-3 text-center' href={`/${username}`}>Posts</Link>
            <div className={`absolute w-3/4 h-1 left-1/2 bottom-0 -translate-x-1/2 rounded-full ${pathname === `/${username}` ? 'bg-sky-500' : ''}`} />
          </div>
          <div className='relative transition-colors duration-200 ease-in-out hover:bg-white/10'>
            <Link className='w-full h-full py-3 text-center' href={`/${username}/media`}>Multimedia</Link>
            <div className={`absolute w-3/4 h-1 left-1/2 bottom-0 -translate-x-1/2 rounded-full ${pathname === `/${username}/media` ? 'bg-sky-500' : ''}`} />
          </div>
        </div>
      </div>
      {pathname === `/${username}` ? posts : media}
    </>

  )
}

export default ViewInteractivity
