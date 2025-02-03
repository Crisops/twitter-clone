'use client'

import { MouseEvent, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { useSearchContext } from '@/hooks/useSearchContext'

interface RedirectWrapperClientProps {
    slug: string
    children: ReactNode
}

export default function RedirectWrapperClient ({ slug, children }:RedirectWrapperClientProps) {
  const router = useRouter()

  const { handleCardClick } = useSearchContext()

  const handleRedirect = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if ((e.target as HTMLElement).closest('[data-no-redirect]')) {
      return
    }

    if ((e.target as HTMLElement).closest('[data-search]')) {
      handleCardClick()
    }
    router.push(slug)
  }

  return (
    <div role='button' onClick={handleRedirect} className='transition-colors duration-200 ease-in-out hover:bg-zinc-800/20'>
      {children}
    </div>
  )
}
