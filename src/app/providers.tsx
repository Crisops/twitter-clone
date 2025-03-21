'use client'

import { ReactNode } from 'react'
import { HeroUIProvider } from '@heroui/react'
import { ToastProvider } from '@heroui/toast'

export function Providers ({ children }: { children: ReactNode }) {
  return (
    <HeroUIProvider>
      <ToastProvider placement='bottom-center' />
      {children}
    </HeroUIProvider>
  )
}
