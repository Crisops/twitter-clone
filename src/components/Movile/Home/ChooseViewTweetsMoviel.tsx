import { Navbar, NavbarContent, NavbarItem } from '@heroui/react'
import { SearchProvider } from '@/context/SearchContext'
import { IconTwitter } from '@/components/Icons'
import DrawerServer from '@/components/Movile/Home/DrawerServer'

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
          <SearchProvider>
            <DrawerServer />
          </SearchProvider>
        </NavbarItem>
        <NavbarItem>
          <IconTwitter size='size-[1.5rem]' />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent>
        <NavbarItem className='relative'>
          <button className='w-full py-3 text-white text-base font-bold transition-colors duration-200 hover:bg-white/10 '>Para ti</button>
          <div className='absolute w-1/4 h-1 left-1/2 bottom-0 -translate-x-1/2 rounded-full bg-sky-500' />
        </NavbarItem>
        <NavbarItem>
          <button className='w-full py-3 text-zinc-500 text-base font-medium transition-colors duration-200 hover:bg-white/10'>Siguiendo</button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default ChooseViewTweetsMoviel
