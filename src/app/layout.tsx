import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'
import { ReactNode } from 'react'
import NavbarLinks from '@/components/Movile/Home/NavbarLinks'

export const metadata: Metadata = {
  title: 'X. Twitter Clone / ByCrisops',
  description: 'This proyect is a clone of Twitter, created by Crisops'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en' className='dark'>
      <head>
        <script src='https://unpkg.com/react-scan/dist/auto.global.js' async />
      </head>
      <body className='h-screen'>
        <Providers>
          {children}
        </Providers>
        <NavbarLinks />
      </body>
    </html>
  )
}
