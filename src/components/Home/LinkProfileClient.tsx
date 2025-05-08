'use client'

import { usePathname } from 'next/navigation'
import { IconUser } from '@tabler/icons-react'
import { Tables } from '@/types/database.types'
import Link from 'next/link'
import { Button } from '@heroui/button'

interface LinkProfileClientProps {
    username: Tables<'users'>['username']
    viewMovil?: boolean
}

export default function LinkProfileClient ({ viewMovil, username }:LinkProfileClientProps) {
  const pathname = usePathname()
  const isActive = pathname === `/${username}` || pathname === `/${username}/media`

  return (
    <Button
      as={Link}
      href={`/${username}`}
      className={`w-full h-12 bg-black ${isActive ? 'text-white first:stroke-1' : 'text-transparent first:stroke-2'} ${viewMovil ? 'justify-start rounded-none' : 'justify-end xl:justify-start'}`}
      disableAnimation
      startContent={<IconUser size='1.75rem' color='white' fill='currentColor' />}
    >
      <span className={`${viewMovil ? 'block' : 'hidden xl:block'} ${isActive ? 'font-semibold text-white' : 'font-normal text-gray-200'} text-xl`}>Perfil</span>
    </Button>
  )
}
