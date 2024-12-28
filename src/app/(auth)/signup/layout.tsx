import { HomeLayout } from '@/components/shared/HomeLayout'
import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Regístrate en X / By Crisops'
}

export default function SignLayout ({ children }: {children: ReactNode}) {
  return (
    <HomeLayout>
      {children}
    </HomeLayout>
  )
}
