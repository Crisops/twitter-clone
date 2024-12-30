import { IconTwitter } from '../Icons'
import AsideInformationUserServer from './AsideInformationUserServer'
import AsideNavigation from './AsideNavigation'
import AsideNavigationDesktop from './AsideNavigationDesktop'

export default function AsideBarMenu () {
  return (
    <aside className='hidden min-[500px]:block sticky top-0 h-screen'>
      <div className='h-full px-1'>
        <div className='flex flex-col justify-between h-full'>
          <div className='flex flex-col w-full h-full'>
            <header className='flex justify-end py-4 pl-4 pr-5 xl:block'>
              <IconTwitter size='size-[2rem]' />
            </header>
            <div className='h-full'>
              <div className='min-[500px]:hidden pl-1 h-full'>
                <AsideNavigation />
              </div>
              <div className='hidden min-[500px]:block pl-1 h-full'>
                <AsideNavigationDesktop />
              </div>
            </div>
          </div>
          <AsideInformationUserServer />
        </div>
      </div>
    </aside>
  )
}
