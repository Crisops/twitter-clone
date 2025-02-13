import { ReactNode } from 'react'
import AsideBarMenu from '@/components/Home/AsideBarMenu'
import ButtonModalComposePostServer from '@/components/shared/ButtonModalComposePostServer'
import SidebarInformation from '@/components/Home/SidebarInformation'

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
      <div className='fixed bottom-20 right-6 min-[500px]:hidden'>
        <ButtonModalComposePostServer
          className='min-w-14 h-14 bg-sky-500 text-white p-1 shadow-default/50'
          sizeModal='full'
          variant='shadow'
          placement='top-center'
        />
      </div>
    </main>
  )
}
