'use client'

import { Alert, AlertVariantProps, Spinner } from '@heroui/react'
import { useReducerOptionsPost } from '@/hooks/useReducerOptionsPost'

interface AlertToastProps {
  variant: AlertVariantProps['variant']
  color: AlertVariantProps['color']
  radius: AlertVariantProps['radius']
}

export default function AlertToast ({ variant, color, radius }: AlertToastProps) {
  const { message, isPending } = useReducerOptionsPost()

  return (
    <div
      className='fixed left-1/2 bottom-14 min-[500px]:bottom-5 -translate-x-1/2 xl:left-[calc((50%-270px)+200px)] w-fit z-50'
    >
      <Alert
        classNames={{ closeButton: 'hidden', mainWrapper: 'ms-0' }}
        className='bg-sky-500 py-2'
        hideIcon
        isVisible={isPending}
        radius={radius}
        color={color}
        title={message ?? <Spinner classNames={{ circle1: ['border-b-white'] }} />}
        variant={variant}
      />
    </div>
  )
}
