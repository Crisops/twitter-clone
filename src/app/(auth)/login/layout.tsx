import { HomeLayout } from '@/components/shared/HomeLayout'
import { ReactNode } from 'react'

export default function LoginLayout ({ children }: {children: ReactNode}) {
  return (
    <HomeLayout>
      {children}
    </HomeLayout>
  )
}
