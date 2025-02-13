import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'
import { ReactNode } from 'react'
import NavbarLinks from '@/components/Movile/Home/NavbarLinks'
import ButtonModalComposePostServer from '@/components/shared/ButtonModalComposePostServer'

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
      <head>
        <script src='https://unpkg.com/react-scan/dist/auto.global.js' async />
      </head>
      <body className='min-h-screen'>
        <Providers>
          {children}
          <div className='fixed bottom-20 right-6 min-[500px]:hidden'>
            <ButtonModalComposePostServer
              className='min-w-14 h-14 bg-sky-500 text-white p-1 shadow-default/50'
              sizeModal='full'
              variant='shadow'
              placement='top-center'
            />
          </div>
          <NavbarLinks />
        </Providers>
      </body>
    </html>
  )
}
