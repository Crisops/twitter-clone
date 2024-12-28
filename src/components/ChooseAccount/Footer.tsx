'use client'

import { linksFooter } from '@/lib/links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const pathname = usePathname()

  const position = pathname === '/login' || pathname === '/signup' ? 'absolute' : 'relative sm:absolute'

  return (
    <footer className={`${position} left-0 bottom-0 w-full flex gap-1 py-1`}>
      <div className='mx-4 lg:mx-16'>
        <div className='flex flex-wrap items-start justify-start lg:justify-center gap-2'>
          {
              linksFooter.map((link, index) => <Link className='text-zinc-500 hover:underline text-sm' key={index} href={link.href}>{link.title}</Link>)
            }
          <span className='text-zinc-500 text-sm'>© 2024 Crisops</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
