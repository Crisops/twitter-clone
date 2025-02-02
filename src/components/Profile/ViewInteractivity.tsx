'use client'

import { Tables } from '@/types/database.types'
import ButtonInteractivity from '@/components/shared/ButtonInteractivity'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

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
        <div className='flex [&>div]:flex-grow [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div>button]:w-full [&>div>button]:h-full'>
          <ButtonInteractivity href={`/${username}`} text='Posts' />
          <ButtonInteractivity href={`/${username}/media`} text='Multimedia' />
        </div>
      </div>
      {pathname === `/${username}` ? posts : media}
    </>

  )
}

export default ViewInteractivity
