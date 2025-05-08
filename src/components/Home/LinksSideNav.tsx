'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@heroui/button'
interface LinksSideNavProps {
  viewMovil?: boolean
  href: string
  icon: ReactNode
  text: string
}

export default function LinksSideNav ({ viewMovil, href, icon, text }: LinksSideNavProps) {
  const pathname = usePathname()

  return (
    <Button
      as={Link}
      href={href}
      className={`w-full h-12 shadow-none bg-black ${pathname === href ? 'text-white first:stroke-1' : 'text-transparent first:stroke-2'} ${viewMovil ? 'justify-start rounded-none' : 'justify-end xl:justify-start'}`}
      disableAnimation
      startContent={icon}
    >
      <span className={` ${viewMovil ? 'block' : 'hidden xl:block'} ${pathname === href ? 'font-semibold text-white' : 'font-normal text-gray-200'} text-xl`}>{text}</span>
    </Button>
  )
}
