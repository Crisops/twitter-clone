import { ReactNode } from 'react'
import LinksSideNav from './LinksSideNav'
import { linksDesktop, linksMovileDrawer } from '@/lib/links-navbar'

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
        </ul>
      </nav>
    </>
  )
}
