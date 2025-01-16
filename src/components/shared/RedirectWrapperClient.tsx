'use client'

import { ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface RedirectWrapperClientProps {
    slug: string
    children: ReactNode
}

export default function RedirectWrapperClient ({ slug, children }:RedirectWrapperClientProps) {
  const router = useRouter()

  const handleRedirect = ({ slug }: {slug: string}) => {
    router.push(slug)
  }

  return (
    <div role='button' onClick={() => handleRedirect({ slug })} className='transition-colors duration-200 ease-in-out hover:bg-zinc-800/20'>
      {children}
    </div>
  )
}
