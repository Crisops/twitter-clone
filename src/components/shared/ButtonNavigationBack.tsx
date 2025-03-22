'use client'

import { useRouter } from 'next/navigation'
import { initialCreateTweetForm } from '@/config/fields-form'
import { useCreateTweet } from '@/hooks/useStore'
import { ButtonProps } from '@heroui/button'
import Button from '@/components/shared/Button'

function ButtonNavigationBack ({ children, isIconOnly, startContent, className, radius }: ButtonProps) {
  const { setFormCreateTweet } = useCreateTweet()
  const router = useRouter()

  const handleBackNavigation = () => {
    setFormCreateTweet(initialCreateTweetForm)
    router.back()
  }

  return (
    <Button
      className={className}
      onPress={handleBackNavigation}
      isIconOnly={isIconOnly}
      startContent={startContent}
      radius={radius}
    >
      {children}
    </Button>
  )
}

export default ButtonNavigationBack
