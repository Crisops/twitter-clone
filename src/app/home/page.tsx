import AsideBarMenu from '@/components/Home/AsideBarMenu'
import SectionTwittsMain from '@/components/Home/SectionTwittsMain'

export default function HomePage () {
  return (
    <section className='relative w-screen'>
      <div className='mx-auto max-w-[80rem]'>
        <section className='grid grid-cols-[270px_1fr_400px]'>
          <AsideBarMenu />
          <SectionTwittsMain />
          <aside className='sticky top-0 h-screen border-l border-zinc-900'>
            <div className=''>
              3
            </div>
          </aside>
        </section>
      </div>
    </section>
  )
}
