import { SearchProvider } from '@/context/SearchContext'
import SearchPeople from '@/components/Home/SearchPeople'

export default function SidebarInformation () {
  return (
    <aside className='hidden lg:block sticky top-0 h-screen'>
      <div className='relative max-w-[370px] w-full ml-8 mt-1' data-search>
        <SearchProvider>
          <SearchPeople shouldHidden />
        </SearchProvider>
      </div>
    </aside>
  )
}
