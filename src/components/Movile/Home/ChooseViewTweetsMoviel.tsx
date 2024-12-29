import { IconTwitter } from '@/components/Icons'
import DrawerHeaderServer from './DrawerHeaderServer'

import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/react'

function ChooseViewTweetsMoviel () {
  return (
    <Navbar
      shouldHideOnScroll
      classNames={
      {
        wrapper: 'px-0 gap-0 flex-col h-28',
        base: 'min-[500px]:hidden backdrop-blur-md bg-black/60',
        content: 'w-full gap-0',
        item: 'flex-grow'
      }
         }
    >
      <NavbarContent justify='center'>
        <NavbarItem className='basis-0 pl-2'>
          <DrawerHeaderServer />
        </NavbarItem>
        <NavbarItem>
          <IconTwitter size='size-[1.5rem]' />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent>
        <NavbarItem>
          <button className='w-full py-3 text-white text-base font-bold transition-colors duration-200 hover:bg-white/10 '>Para ti</button>
        </NavbarItem>
        <NavbarItem>
          <button className='w-full py-3 text-zinc-500 text-base font-medium transition-colors duration-200 hover:bg-white/10'>Siguiendo</button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default ChooseViewTweetsMoviel
