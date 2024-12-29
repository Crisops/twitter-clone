import { IconTwitter } from '@/components/Icons'
import DrawerHeaderServer from './DrawerHeaderServer'

function ChooseViewTweetsMoviel () {
  return (
    <div className='block min-[500px]:hidden sticky top-0 w-full h-24 border-b border-zinc-900 z-10'>
      <div className='flex flex-col h-full backdrop-blur-md bg-black/60'>
        <div className='relative flex w-full h-12 items-center'>
          <DrawerHeaderServer />
          <div className='flex flex-grow justify-center basis-0'>
            <IconTwitter size='size-[1.5rem]' />
          </div>
        </div>
        <div className='flex w-full h-12'>
          <div className='flex-grow'>
            <button className='w-full h-full text-white text-base font-bold transition-colors duration-200 hover:bg-white/10 '>Para ti</button>
          </div>
          <div className='flex-grow'>
            <button className='w-full h-full text-zinc-500 text-base font-medium transition-colors duration-200 hover:bg-white/10'>Siguiendo</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseViewTweetsMoviel
