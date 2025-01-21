'use client'

import { MouseEvent, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface RedirectWrapperClientProps {
    slug: string
    children: ReactNode
}

export default function RedirectWrapperClient ({ slug, children }:RedirectWrapperClientProps) {
  const router = useRouter()

  const handleRedirect = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if ((e.target as HTMLElement).closest('[data-no-redirect]')) {
      return
    }
    router.push(slug)
  }

  return (
    <div role='button' onClick={handleRedirect} className='transition-colors duration-200 ease-in-out hover:bg-zinc-800/20'>
      {children}
    </div>
  )
}
