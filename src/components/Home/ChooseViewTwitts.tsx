'use client'

import { useScroll } from '@/hooks/useScroll'

export default function ChooseViewTwitts () {
  const { scroll } = useScroll()

  return (
    <div className='sticky top-0 w-full h-14 border-b border-zinc-900 z-10'>
      <div className={`flex justify-between items-center h-full [&>div]:flex [&>div]:justify-center [&>div]:items-center transition-all duration-200 ${scroll > 0 ? 'backdrop-blur-md bg-black/60' : 'backdrop-blur-none'}`}>
        <div className='flex-grow h-full'>
          <button className='w-full h-full text-white text-base font-bold transition-colors duration-200 hover:bg-white/10 '>Para ti</button>
        </div>
        <div className='flex-grow h-full'>
          <button className='w-full h-full text-zinc-500 text-base font-medium transition-colors duration-200 hover:bg-white/10'>Siguiendo</button>
        </div>
      </div>
    </div>
  )
}
