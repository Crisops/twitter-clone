import { IconTwitter } from '@/components/Icons'
import AsideInformationUserServer from '@/components/Home/AsideInformationUserServer'
import AsideNavigation from '@/components/Home//AsideNavigation'
import AsideNavigationDesktop from '@/components/Home/AsideNavigationDesktop'

export default function AsideBarMenu () {
  return (
    <aside className='hidden min-[500px]:block sticky top-0 h-screen border-r border-zinc-700'>
      <div className='h-full px-1'>
        <div className='flex flex-col justify-between h-full'>
          <div className='flex flex-col w-full h-full'>
            <header className='flex justify-end xl:block p-3'>
              <IconTwitter size='size-7' />
            </header>
            <div className='h-full'>
              <div className='min-[500px]:hidden h-full'>
                <AsideNavigation />
              </div>
              <div className='hidden min-[500px]:block h-full'>
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
