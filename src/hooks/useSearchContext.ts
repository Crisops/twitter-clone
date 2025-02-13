import { useContext } from 'react'
import { SearchContext } from '@/context/SearchContext'

export const useSearchContext = () => {
  const searchContext = useContext(SearchContext)
  if (!searchContext) throw new Error('useSearchContext debe usarse dentro de un SearchProvider')
  return searchContext
}
