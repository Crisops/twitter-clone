'use client'

import { useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { linksMovileHome } from '@/lib/links-navbar'
import { Navbar, NavbarContent, NavbarItem } from '@heroui/react'
import Link from 'next/link'

export default function NavbarLinks () {
  const [scroll, setScroll] = useState<number>(0)
  const numberRef = useRef<number>(scroll)

  const pathname = usePathname()

  const handleScrollPositionChange = (value: number) => {
    setScroll(value)
    numberRef.current = scroll
  }

  return (
    <div className='min-[500px]:hidden fixed w-full left-0 bottom-0'>
      <Navbar
        onScrollPositionChange={handleScrollPositionChange}
        className={`border-t border-zinc-700 transition-opacity duration-150 ease-in-out h-12 [&>header]:h-full ${numberRef.current < scroll ? 'opacity-25' : 'opacity-100'}`} maxWidth='full' classNames={{ content: 'data-[justify=start]:justify-evenly' }}
        isBlurred={false}
      >
        <NavbarContent className='flex gap-4 w-full'>
          {
            linksMovileHome.map(({ href, icon }, index) => (
              <NavbarItem key={index} isActive={pathname === href} className='group'>
                <Link href={href} className='group-data-[active=true]:text-white group-data-[active=true]:first:stroke-1 text-transparent first:stroke-2'>
                  {icon}
                </Link>
              </NavbarItem>
            ))
        }
        </NavbarContent>
      </Navbar>
    </div>
  )
}
