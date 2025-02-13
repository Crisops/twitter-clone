'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { type LinksAsideNavHome } from '@/types/generics'
import Link from 'next/link'
interface LinksSideNavProps {
  links: LinksAsideNavHome[]
  viewMovil?: boolean
  LinkProfile: ReactNode
}

export default function LinksSideNav ({ links, viewMovil, LinkProfile }: LinksSideNavProps) {
  const pathname = usePathname()

  return (
    <>
      {
        links.map(({ href, icon, text }, index) => (
          <li key={index} className='group'>
            <Link href={href} className={`w-full flex  ${viewMovil ? 'justify-start' : 'justify-end xl:justify-start'}`}>
              <div className={` ${viewMovil ? 'w-full group-hover:bg-[#5b70831A]' : 'w-max rounded-full group-hover:bg-white/10'} p-3 transition-colors duration-150`}>
                <div className='flex items-center justify-start gap-5'>
                  <div className={`${pathname === href ? 'text-white first:stroke-1 ' : 'text-transparent first:stroke-1'}`}>
                    {icon}
                  </div>
                  <div className={`${viewMovil ? 'block' : 'hidden xl:block'}`}>
                    <span className={`${pathname === href ? 'font-semibold text-white' : 'font-normal text-gray-200'}  text-xl`}>{text}</span>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))
        }
      {LinkProfile}
    </>
  )
}
