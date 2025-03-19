import { Navbar, NavbarContent, NavbarItem } from '@heroui/react'

export default function ChooseViewTwitts () {
  return (
    <Navbar
      classNames={
        {
          wrapper: 'px-0 gap-0 flex-col h-14 xl:border-l xl:border-zinc-700',
          base: 'hidden min-[500px]:flex',
          content: 'w-full gap-0',
          item: 'flex-grow'
        }
      }
    >
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
