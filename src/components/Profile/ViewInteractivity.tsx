'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { Tables } from '@/types/database.types'
import Link from 'next/link'

interface ViewInteractivityProps {
  posts?: ReactNode
  media?: ReactNode
  action: Array<'Posts' | 'Multimedia' | 'Followers' | 'Seguidores' | 'Siguiendo'>
  href: string[]
  username: Tables<'users'>['username']
}

function ViewInteractivity ({ username, posts, media, action, href }: ViewInteractivityProps) {
  const pathname = usePathname()

  return (
    <>
      <div className='w-full border-b border-zinc-700'>
        <div className='flex [&>div]:flex-grow [&>div]:flex [&>div]:justify-center [&>div]:items-center'>
          <div className={`relative ${pathname !== href[0] ? 'transition-colors duration-200 ease-in-out hover:bg-white/10' : ''}`}>
            <Link className={`w-full h-full py-3 text-center ${pathname === href[0] ? 'font-bold' : ''}`} href={href[0]}>{action[0]}</Link>
            <div className={`absolute w-3/4 h-1 left-1/2 bottom-0 -translate-x-1/2 rounded-full ${pathname === href[0] ? 'bg-sky-500' : ''}`} />
          </div>
          <div className={`relative ${pathname !== href[1] ? 'transition-colors duration-200 ease-in-out hover:bg-white/10' : ''}`}>
            <Link className={`w-full h-full py-3 text-center ${pathname === href[1] ? 'font-bold' : ''}`} href={href[1]}>{action[1]}</Link>
            <div className={`absolute w-3/4 h-1 left-1/2 bottom-0 -translate-x-1/2 rounded-full ${pathname === href[1] ? 'bg-sky-500' : ''}`} />
          </div>
        </div>
      </div>
      {(media && posts) && pathname === `/${username}` ? posts : media}
    </>

  )
}

export default ViewInteractivity
