import { ReactNode } from 'react'
import RedirectWrapperClient from './RedirectWrapperClient'
import { SearchProvider } from '@/context/SearchContext'

interface RedirectWrapperServerProps {
    slug: string
    children: ReactNode
}

function RedirectWrapperServer ({ slug, children }: RedirectWrapperServerProps) {
  return (
    <SearchProvider>
      <RedirectWrapperClient slug={slug}>
        {children}
      </RedirectWrapperClient>
    </SearchProvider>
  )
}

export default RedirectWrapperServer
