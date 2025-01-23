import { Tables } from '@/types/database.types'
import { DrawerHeader as DrawerHeaderClient } from '@heroui/react'
import { ReactNode } from 'react'

interface DrawerHeaderContentClientProps {
    name?: Tables<'users'>['name']
    username?: Tables<'users'>['username']
    avatar?: ReactNode
}

function DrawerHeader ({ avatar, name, username }: DrawerHeaderContentClientProps) {
  return (
    <DrawerHeaderClient className='flex flex-col gap-1 px-3'>
      {avatar}
      <div className='flex flex-col mb-2'>
        <span className='font-medium text-lg'>{name}</span>
        <span className='text-zinc-500 text-base font-normal'>@{username}</span>
      </div>
      <div className='flex justify-start items-center gap-6 [&>div]:flex [&>div]:gap-1 [&>div>span]:text-sm'>
        <div>
          <span className='text-white font-medium'>2</span>
          <span className='text-zinc-500 font-normal'>Siguiendo</span>
        </div>
        <div>
          <span className='text-white font-medium'>0</span>
          <span className='text-zinc-500 font-normal'>Seguidores</span>
        </div>
      </div>
    </DrawerHeaderClient>
  )
}

export default DrawerHeader
