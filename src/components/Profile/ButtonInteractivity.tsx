'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface ButtonInteractivityProps {
    text: string
    href: string
}

export default function ButtonInteractivity ({ href, text }:ButtonInteractivityProps) {
  const pathname = usePathname()

  return (
    <>
      <button className='transition-colors duration-200 ease-in-out hover:bg-white/10'>
        <Link className='block w-full h-full py-3' href={href}>
          <span className={` font-medium ${pathname === href ? 'text-white' : 'text-zinc-500'}`}>{text}</span>
        </Link>
      </button>
      <div className={`absolute w-3/4 h-1 left-1/2 bottom-0 -translate-x-1/2 rounded-full ${pathname === href ? 'bg-sky-500' : ''}`} />
    </>
  )
}
