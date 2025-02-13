import { ReactNode } from 'react'
import { SearchProvider } from '@/context/SearchContext'
import RedirectWrapperClient from '@/components/shared/RedirectWrapperClient'

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
