import { Navbar, NavbarContent, NavbarItem } from '@heroui/navbar'
import { IconArrowNarrowLeft } from '@tabler/icons-react'
import ButtonNavigationBack from '@/components/shared/ButtonNavigationBack'

export default function HeaderBackPost () {
  return (
    <Navbar
      classNames={
      {
        wrapper: 'px-0 gap-0 flex-col h-14 xl:border-l xl:border-zinc-700',
        content: 'w-full gap-0'
      }
    }
    >
      <NavbarContent>
        <NavbarItem className='pl-2'>
          <ButtonNavigationBack
            className='bg-transparent px-1 group'
            startContent={<IconArrowNarrowLeft size={30} className='p-1 group-hover:bg-white/10 group-hover:rounded-full' />}
            isIconOnly={false}
          >
            <span className='text-xl font-bold text-gray-100 pb-1'>Post</span>
          </ButtonNavigationBack>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
