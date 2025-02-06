import { ReactNode } from 'react'
import LinksSideNav from './LinksSideNav'
import { linksDesktop, linksMovileDrawer } from '@/lib/links-navbar'
import ButtonModalComposePostServer from '@/components/shared/ButtonModalComposePostServer'

interface AsideNavigationProps {
  viewMovil?: boolean
  LinkProfile?: ReactNode
}

export default function AsideNavigation ({ viewMovil, LinkProfile }: AsideNavigationProps) {
  const preLoadLinks = viewMovil ? linksMovileDrawer : linksDesktop

  return (
    <>
      <nav className='flex'>
        <ul className='flex flex-col justify-start w-full gap-1'>
          <LinksSideNav links={preLoadLinks} viewMovil={viewMovil} LinkProfile={LinkProfile} />
          <li className='hidden min-[500px]:block min-[500px]:mt-2'>
            <ButtonModalComposePostServer variant='solid' sizeModal='xl' placement='top' className='min-w-fit bg-white text-black py-2 px-3' />
          </li>
        </ul>
      </nav>
    </>
  )
}
