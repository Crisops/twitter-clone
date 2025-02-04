import HeaderDesktop from '@/components/Search/Desktop/HeaderDesktop'
import HeaderMovile from '@/components/Search/Movile/HeaderMovile'
import { SearchProvider } from '@/context/SearchContext'

function ExplorePage () {
  return (
    <div className='w-full h-full border-r border-zinc-700'>
      <SearchProvider>
        <HeaderDesktop />
        <HeaderMovile />
      </SearchProvider>
    </div>
  )
}

export default ExplorePage
