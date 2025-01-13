'use client'

import { ReactNode, useState } from 'react'
import { IconDots } from '@tabler/icons-react'
import SignOutUser from './SignOutUser'
import { Tables } from '@/types/database.types'

type AsideInformationUserProps = {
  name: Tables<'users'>['id']
  username: Tables<'users'>['username']
  children: ReactNode
}

export default function AsideInformationUserClient ({ name, username, children: imageUser }: AsideInformationUserProps) {
  const [view, setView] = useState<boolean>(false)
  const handleViewSignOut = () => {
    setView(!view)
  }

  return (
    <div onClick={handleViewSignOut} role='button' className='relative top-0 left-0 py-3 pl-1'>
      <div className='flex items-center justify-end xl:justify-between pl-2 py-2 pr-3 rounded-full cursor-pointer transition-colors duration-150 hover:bg-white/10'>
        <div className='flex items-center'>
          {imageUser}
          <div className='ml-3 hidden xl:block'>
            <div className='flex flex-col justify-between'>
              <h4 className='text-white font-medium text-base'>{name}</h4>
              <span className='text-zinc-500 text-base font-normal'>@{username}</span>
            </div>
          </div>
        </div>
        <div className='hidden xl:block'>
          <IconDots size={20} color='white' />
        </div>
      </div>
      {view && <SignOutUser username={username} />}
    </div>
  )
}
