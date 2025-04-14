import { ReactNode } from 'react'
import { IconDots } from '@tabler/icons-react'
import { Tables } from '@/types/database.types'
import { Popover, PopoverContent, PopoverTrigger } from '@heroui/react'
import SignOutUser from '@/components/Home/SignOutUser'

type AsideInformationUserProps = {
  name: Tables<'users'>['id']
  username: Tables<'users'>['username']
  children: ReactNode
}

export default function AsideInformationUserClient ({ name, username, children: imageUser }: AsideInformationUserProps) {
  return (
    <Popover placement='top' triggerScaleOnOpen={false} showArrow classNames={{ base: 'before:bg-black shadow-lg shadow-white/20 rounded-xl', content: 'bg-black' }}>
      <PopoverTrigger>
        <div className='flex w-full items-center justify-end mb-2 xl:justify-between rounded-full xl:cursor-pointer xl:transition-colors xl:duration-150 xl:hover:bg-white/10'>
          <div className='flex items-center pl-2 py-2 pr-1 transition-colors duration-150 hover:bg-white/10 xl:hover:bg-transparent rounded-full hover:cursor-pointer '>
            <div className='shrink-0'>
              {imageUser}
            </div>
            <div className='ml-3 hidden xl:block'>
              <div className='flex flex-col justify-between'>
                <h4 className='text-white font-medium text-base max-w-36 truncate'>{name}</h4>
                <span className='text-zinc-500 text-base font-normal'>@{username}</span>
              </div>
            </div>
          </div>
          <div className='hidden xl:block xl:flex-grow'>
            <div className='w-full flex justify-center'>
              <IconDots size={20} color='white' />
            </div>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className='px-0 pb-0 '>
        <SignOutUser username={username} />
      </PopoverContent>
    </Popover>
  )
}
