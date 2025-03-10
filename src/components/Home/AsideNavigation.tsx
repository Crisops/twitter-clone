import { ReactNode } from 'react'
import { IconFeather } from '@/components/Icons'
import { linksDesktop, linksMovileDrawer } from '@/lib/links-navbar'
import ButtonModalComposePostServer from '@/components/shared/ButtonModalComposePostServer'
import LinksSideNav from '@/components/Home/LinksSideNav'

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
            <ButtonModalComposePostServer
              variant='solid'
              sizeModal='xl'
              placement='top'
              className='min-w-fit bg-white text-black py-2 px-3 font-semibold text-medium xl:w-4/5'
              loadingForm='create-post'
            >
              <span className='block xl:hidden'><IconFeather className='fill-current size-6' /></span>
              <span className='hidden xl:block text-current'>Postear</span>
            </ButtonModalComposePostServer>
          </li>
        </ul>
      </nav>
    </>
  )
}
