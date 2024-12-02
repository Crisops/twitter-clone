import './globals.css'
import type { Metadata } from 'next'
import {Providers} from "./providers";



export const metadata: Metadata = {
  title: 'X. Twitter Clone / ByCrisops',
  description: 'This proyect is a clone of Twitter, created by Crisops'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='dark'>
      <head>
        <script src="https://unpkg.com/react-scan/dist/auto.global.js" async />
      </head>
      <body className='w-full min-h-screen'>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
