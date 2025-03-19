import { SearchProvider } from '@/context/SearchContext'
import HeaderDesktop from '@/components/Search/Desktop/HeaderDesktop'
import HeaderMovile from '@/components/Search/Movile/HeaderMovile'

function ExplorePage () {
  return (
    <div className='w-full h-full border-x border-zinc-700'>
      <SearchProvider>
        <HeaderDesktop />
        <HeaderMovile />
      </SearchProvider>
    </div>
  )
}

export default ExplorePage
