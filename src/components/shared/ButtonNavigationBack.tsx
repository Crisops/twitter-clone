'use client'

import { useRouter } from 'next/navigation'
import { initialCreateTweetForm } from '@/config/fields-form'
import { useCreateTweet } from '@/hooks/useStore'
import { IconArrowNarrowLeft } from '@tabler/icons-react'

function ButtonNavigationBack () {
  const { setFormCreateTweet } = useCreateTweet()
  const router = useRouter()

  const handleBackNavigation = () => {
    setFormCreateTweet(initialCreateTweetForm)
    router.back()
  }

  return (
    <button onClick={handleBackNavigation} className='p-1.5 rounded-full transition-colors ease-in-out duration-200 hover:bg-white/10'><IconArrowNarrowLeft /></button>
  )
}

export default ButtonNavigationBack
