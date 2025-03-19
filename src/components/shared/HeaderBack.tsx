import { ReactNode } from 'react'
import { Tables } from '@/types/database.types'
import { getUserTweetCount } from '@/utils/supabase/getTweets'
import { IconArrowNarrowLeft } from '@tabler/icons-react'
import ButtonNavigationBack from '@/components/shared/ButtonNavigationBack'

interface HeaderBackProps {
  id?: Tables<'users'>['id']
  name: Tables<'users'>['name']
  username?: Tables<'users'>['username']
  children?: ReactNode
}

async function HeaderBack ({ id, name, username, children }: HeaderBackProps) {
  let quantity = 0

  if (id) {
    const { count } = await getUserTweetCount({ id })
    quantity = count
  }

  return (
    <div className={`${children ? 'block' : 'hidden min-[500px]:block'} sticky top-0 w-full h-max px-2 border-b border-zinc-900 z-50 backdrop-blur-md bg-black/60`}>
      <div className='flex items-center'>
        <div className='flex items-center w-16 h-full'>
          <ButtonNavigationBack className='bg-transparent p-1.5 hover:bg-white/10' isIconOnly radius='full'>
            <IconArrowNarrowLeft size={25} />
          </ButtonNavigationBack>
        </div>
        <div className='flex-grow flex flex-col justify-center'>
          <div className='truncate max-w-28 sm:max-w-56 lg:max-w-96'>
            <span className='text-xl font-bold text-gray-100'>{name}</span>
          </div>
          <div className='inline-flex'>
            <span className='text-sm font-normal text-zinc-500'>{id ? `${quantity} posts` : `@${username}`}</span>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

export default HeaderBack
