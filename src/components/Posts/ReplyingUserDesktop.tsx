import { Tables } from '@/types/database.types'

interface ReplyingUserDesktopProps {
    openModal: boolean
    username: Tables<'users'>['username'] | undefined
}

export default function ReplyingUserDesktop ({ openModal, username }: ReplyingUserDesktopProps) {
  return (
    <div className='flex justify-end'>
      {openModal &&
        <div className='relative flex-grow'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-zinc-500' />
        </div>}
      <div className='w-[calc(100%-40px)]'>
        <p className='text-zinc-500 pointer-events-none'>Respondiendo a <span className='text-sky-600'>@{username}</span></p>
      </div>
    </div>
  )
}
