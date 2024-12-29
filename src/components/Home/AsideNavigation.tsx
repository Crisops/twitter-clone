import LinksSideNav from './LinksSideNav'
import { linksDesktop, linksMovileDrawer } from '@/lib/links-navbar'

interface AsideNavigationProps {
  viewMovil?: boolean
}

export default function AsideNavigation ({ viewMovil }: AsideNavigationProps) {
  const preLoadLinks = viewMovil ? linksMovileDrawer : linksDesktop

  return (
    <>
      <nav className='flex'>
        <ul className='flex flex-col justify-start w-full gap-1'>
          <LinksSideNav links={preLoadLinks} viewMovil={viewMovil} />
        </ul>
      </nav>
    </>
  )
}
