import { ReactNode } from 'react'
import RedirectWrapperClient from './RedirectWrapperClient'

interface RedirectWrapperServerProps {
    slug: string
    children: ReactNode
}

function RedirectWrapperServer ({ slug, children }: RedirectWrapperServerProps) {
  return (
    <RedirectWrapperClient slug={slug}>
      {children}
    </RedirectWrapperClient>
  )
}

export default RedirectWrapperServer
