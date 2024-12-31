import { IconArrowNarrowLeft } from '@tabler/icons-react'

interface HeaderBackProps {
    name: string
    countPost: number
}

function HeaderBack ({ name, countPost = 0 }: HeaderBackProps) {
  return (
    <div className='hidden min-[500px]:block sticky top-0 w-full h-14 px-2 border-b border-zinc-900 z-10 backdrop-blur-md bg-black/60'>
      <div className='flex items-center'>
        <div className='flex items-center w-16 h-full'>
          <button className='p-1.5 rounded-full transition-colors ease-in-out duration-200 hover:bg-white/10'><IconArrowNarrowLeft /></button>
        </div>
        <div className='flex-grow flex flex-col justify-center'>
          <div>
            <span className='text-xl font-bold text-white'>{name}</span>
          </div>
          <div>
            <span className='text-sm font-normal text-zinc-500'>{countPost} posts</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderBack
