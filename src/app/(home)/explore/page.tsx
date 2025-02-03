import HeaderDesktop from '@/components/Search/Desktop/HeaderDesktop'
import { SearchProvider } from '@/context/SearchContext'

function ExplorePage () {
  return (
    <div className='w-full h-full border-r border-zinc-700'>
      <SearchProvider>
        <HeaderDesktop />
      </SearchProvider>
    </div>
  )
}

export default ExplorePage
