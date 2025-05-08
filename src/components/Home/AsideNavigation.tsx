import { ReactNode } from 'react'
import { IconFeather, IconTwitter } from '@/components/Icons'
import { linksDesktop, linksMovileDrawer } from '@/lib/links-navbar'
import AsideInformationUserServer from '@/components/Home/AsideInformationUserServer'
import Button from '@/components/shared/Button'
import ButtonModalComposePostServer from '@/components/shared/ButtonModalComposePostServer'
import Link from 'next/link'
import LinksSideNav from '@/components/Home/LinksSideNav'
import { Navbar, NavbarContent, NavbarItem } from '@heroui/navbar'

interface AsideNavigationProps {
  viewMovil?: boolean
  LinkProfile?: ReactNode
}

export default function AsideNavigation ({ viewMovil, LinkProfile }: AsideNavigationProps) {
  const preLoadLinks = viewMovil ? linksMovileDrawer : linksDesktop

  return (
    <Navbar classNames={{ base: ['items-start [&>header]:px-3 [&>header]:h-full h-screen'], content: [`flex flex-col h-full ${viewMovil ? 'items-start' : 'items-end xl:items-start'} gap-2`] }}>
      <NavbarContent justify='start'>
        <NavbarItem className={`${viewMovil ? 'hidden' : 'inline-flex'}`}>
          <Button as={Link} href='/home' disableAnimation className='bg-transparent min-w-fit h-12 data-[hover=true]:opacity-100'>
            <IconTwitter size='size-7' />
          </Button>
        </NavbarItem>
        {preLoadLinks.map(({ href, icon, text }, index) => (
          <NavbarItem key={index} className={`transition-colors duration-150 w-full ${viewMovil ? 'hover:bg-[#5b70831A]' : 'rounded-full hover:bg-white/10'}`}>
            <LinksSideNav viewMovil={viewMovil} href={href} icon={icon} text={text} />
          </NavbarItem>
        ))}
        <NavbarItem className={`transition-colors duration-150 w-full ${viewMovil ? 'hover:bg-[#5b70831A]' : 'rounded-full hover:bg-white/10'}`}>
          {LinkProfile}
        </NavbarItem>
        <NavbarItem className='w-full'>
          <ButtonModalComposePostServer
            variant='solid'
            sizeModal='xl'
            placement='top'
            className={`${viewMovil ? 'hidden' : 'inline-flex mt-2'} min-w-fit xl:w-full bg-white text-black py-2 px-3 font-semibold text-medium`}
            loadingForm='create-post'
          >
            <span className='block xl:hidden'><IconFeather className='fill-current size-6' /></span>
            <span className='hidden xl:block text-current'>Postear</span>
          </ButtonModalComposePostServer>
        </NavbarItem>
        <NavbarItem className={`grow flex w-full h-full items-end ${viewMovil ? 'hidden' : 'inline-flex'}`}>
          <AsideInformationUserServer />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
