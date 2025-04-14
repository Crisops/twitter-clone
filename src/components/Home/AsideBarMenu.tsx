import AsideNavigation from '@/components/Home//AsideNavigation'
import AsideNavigationDesktop from '@/components/Home/AsideNavigationDesktop'

export default function AsideBarMenu () {
  return (
    <aside className='hidden min-[500px]:block top-0 h-full'>
      <div className='relative min-[500px]:hidden h-full'>
        <AsideNavigation />
      </div>
      <AsideNavigationDesktop />
    </aside>
  )
}
