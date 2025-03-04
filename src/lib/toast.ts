import { addToast as toast } from '@heroui/react'

export function addToast ({ promise, message, timeout }: {promise?: Promise<void>, message: string, timeout?: number}) {
  toast({
    hideCloseButton: true,
    classNames: {
      base: ['bg-sky-500'],
      title: 'text-white'
    },
    title: message,
    promise,
    timeout
  })
}
