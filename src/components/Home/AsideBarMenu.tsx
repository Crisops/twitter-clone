import { IconTwitter } from '../Icons'
import AsideInformationUserServer from './AsideInformationUserServer'
import AsideNavigation from './AsideNavigation'

export default function AsideBarMenu () {
  return (
    <aside className='sticky top-0 h-screen border-r-1 border-zinc-900'>
      <div className='h-full px-1'>
        <div className='flex flex-col justify-between h-full'>
          <div className='flex flex-col w-full h-full'>
            <header className='py-4 pl-4'>
              <IconTwitter size='size-[2rem]' />
            </header>
            <div className='h-full'>
              <div className='pl-1 h-full'>
                <AsideNavigation />
              </div>
            </div>
          </div>
          <AsideInformationUserServer />
        </div>
      </div>
    </aside>
  )
}
