import { getUserTweetCount } from '@/utils/supabase/getTweets'
import { IconArrowNarrowLeft } from '@tabler/icons-react'

interface HeaderBackProps {
  id: string
  name: string
}

async function HeaderBack ({ id, name }: HeaderBackProps) {
  const { count } = await getUserTweetCount({ id })

  return (
    <div className='hidden min-[500px]:block sticky top-0 w-full h-14 px-2 border-b border-zinc-900 z-10 backdrop-blur-md bg-black/60'>
      <div className='flex items-center'>
        <div className='flex items-center w-16 h-full'>
          <button className='p-1.5 rounded-full transition-colors ease-in-out duration-200 hover:bg-white/10'><IconArrowNarrowLeft /></button>
        </div>
        <div className='flex-grow flex flex-col justify-center'>
          <div>
            <span className='text-xl font-bold text-gray-100'>{name}</span>
          </div>
          <div>
            <span className='text-sm font-normal text-zinc-500'>{count} posts</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderBack
