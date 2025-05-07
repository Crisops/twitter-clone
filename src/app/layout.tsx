import './globals.css'
import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Providers } from '@/app/providers'
import NavbarLinks from '@/components/Movile/Home/NavbarLinks'

export const metadata: Metadata = {
  title: 'Inicio / Twitter Clone X',
  description: 'This proyect is a clone of Twitter, created by Crisops'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en' className='dark'>
      <body className='min-h-screen'>
        <Providers>
          {children}
          <NavbarLinks />
        </Providers>
      </body>
    </html>
  )
}
