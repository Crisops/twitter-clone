import { ReactNode } from 'react'
import { IconFeather, IconTwitter } from '@/components/Icons'
import { linksDesktop, linksMovileDrawer } from '@/lib/links-navbar'
import AsideInformationUserServer from '@/components/Home/AsideInformationUserServer'
import ButtonModalComposePostServer from '@/components/shared/ButtonModalComposePostServer'
import { Navbar, NavbarContent, NavbarItem } from '@heroui/navbar'
import LinksSideNav from '@/components/Home/LinksSideNav'

interface AsideNavigationProps {
  viewMovil?: boolean
  LinkProfile?: ReactNode
}

export default function AsideNavigation ({ viewMovil, LinkProfile }: AsideNavigationProps) {
  const preLoadLinks = viewMovil ? linksMovileDrawer : linksDesktop

  return (
    <Navbar classNames={{ base: ['items-start [&>header]:px-3 [&>header]:h-full h-screen'], content: ['flex flex-col h-full items-start'] }}>
      <NavbarContent justify='start'>
        <NavbarItem className='p-3'>
          <IconTwitter size='size-7' />
        </NavbarItem>
        {preLoadLinks.map(({ href, icon, text }, index) => (
          <NavbarItem key={index}>
            <LinksSideNav viewMovil={viewMovil} href={href} icon={icon} text={text} />
          </NavbarItem>
        ))}
        <NavbarItem className='w-full'>
          <ButtonModalComposePostServer
            variant='solid'
            sizeModal='xl'
            placement='top'
            className='w-full bg-white text-black py-2 px-3 font-semibold text-medium xl:w-4/5'
            loadingForm='create-post'
          >
            <span className='block xl:hidden'><IconFeather className='fill-current size-6' /></span>
            <span className='hidden xl:block text-current'>Postear</span>
          </ButtonModalComposePostServer>
        </NavbarItem>
        <NavbarItem className='grow flex w-full h-full items-end'>
          <AsideInformationUserServer />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
