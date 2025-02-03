import { SearchProvider } from '@/context/SearchContext'
import SearchPeople from './SearchPeople'

export default function SidebarInformation () {
  return (
    <aside className='hidden lg:block sticky top-0 h-screen'>
      <SearchProvider>
        <SearchPeople />
      </SearchProvider>
    </aside>
  )
}
