import { ReactNode } from 'react'

export default function AuthLayout ({ children }: {children: ReactNode}) {
  return (
    <main className='relative h-screen'>
      {children}
    </main>
  )
}
