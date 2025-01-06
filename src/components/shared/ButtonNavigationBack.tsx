'use client'

import { IconArrowNarrowLeft } from '@tabler/icons-react'
import React from 'react'
import { useRouter } from 'next/navigation'

function ButtonNavigationBack () {
  const router = useRouter()

  const handleBackNavigation = () => {
    router.back()
  }

  return (
    <button onClick={handleBackNavigation} className='p-1.5 rounded-full transition-colors ease-in-out duration-200 hover:bg-white/10'><IconArrowNarrowLeft /></button>
  )
}

export default ButtonNavigationBack
