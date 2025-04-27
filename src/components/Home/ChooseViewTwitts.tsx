import { Navbar, NavbarContent, NavbarItem } from '@heroui/navbar'
import Button from '@/components/shared/Button'

export default function ChooseViewTwitts () {
  return (
    <Navbar
      classNames={
        {
          wrapper: 'px-0 gap-0 flex-col h-14',
          base: 'hidden min-[500px]:flex',
          content: 'w-full gap-0',
          item: 'flex-grow h-full'
        }
      }
    >
      <NavbarContent>
        <NavbarItem className='relative transition-colors duration-200 hover:bg-white/10 '>
          <Button disableAnimation className='w-full h-full bg-transparent text-white font-bold text-medium'>
            Para ti
          </Button>
          <div className='absolute w-1/4 h-1 left-1/2 bottom-0 -translate-x-1/2 rounded-full bg-sky-500' />
        </NavbarItem>
        <NavbarItem className='transition-colors duration-200 hover:bg-white/10'>
          <Button disableAnimation className='w-full h-full bg-transparent text-zinc-500 font-bold text-medium'>
            Siguiendo
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
