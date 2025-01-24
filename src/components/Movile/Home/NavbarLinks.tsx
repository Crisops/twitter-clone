'use client'

import { Navbar, NavbarContent, NavbarItem } from '@heroui/react'
import Link from 'next/link'
import { linksMovileHome } from '@/lib/links-navbar'
import { useRef, useState } from 'react'

export default function NavbarLinks () {
  const [scroll, setScroll] = useState<number>(0)
  const numberRef = useRef<number>(scroll)

  const handleScrollPositionChange = (value: number) => {
    setScroll(value)
    numberRef.current = scroll
  }

  return (
    <div className='min-[500px]:hidden fixed w-full left-0 bottom-0'>
      <Navbar onScrollPositionChange={handleScrollPositionChange} className={`border-t border-zinc-700 transition-opacity duration-150 ease-in-out h-12 ${numberRef.current <= scroll ? 'opacity-25' : 'opacity-100'}`} maxWidth='full' classNames={{ content: 'data-[justify=start]:justify-evenly' }} isBlurred={false}>
        <NavbarContent className='flex gap-4 w-full'>
          {
            linksMovileHome.map(({ href, icon }, index) => (
              <NavbarItem key={index}>
                <Link href={href}>
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
