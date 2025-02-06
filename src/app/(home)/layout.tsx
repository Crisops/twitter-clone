import AsideBarMenu from '@/components/Home/AsideBarMenu'
import SidebarInformation from '@/components/Home/SidebarInformation'
import { ReactNode } from 'react'

interface HomeLayoutProps {
  children: ReactNode
}

export default function HomeLayout ({ children }: HomeLayoutProps) {
  return (
    <main>
      <section className='relative'>
        <div className='mx-auto max-w-[80rem]'>
          <section className='min-[500px]:grid min-[500px]:grid-cols-[max-content_1fr] sm:grid-cols-[100px_512px] md:grid-cols-[180px_512px] lg:grid-cols-[max-content_1fr_450px] min-[1200px]:grid-cols-[150px_1fr_450px] xl:grid-cols-[270px_1fr_400px]'>
            <AsideBarMenu />
            {children}
            <SidebarInformation />
          </section>
        </div>
      </section>
    </main>
  )
}
