'use client'

import { usePathname } from 'next/navigation'
import { IconUser } from '@tabler/icons-react'
import { Tables } from '@/types/database.types'
import Link from 'next/link'

interface LinkProfileClientProps {
    username: Tables<'users'>['username']
    viewMovil?: boolean
}

export default function LinkProfileClient ({ viewMovil, username }:LinkProfileClientProps) {
  const pathname = usePathname()
  return (
    <li className='group'>
      <Link href={`/${username}`} className={`w-full flex  ${viewMovil ? 'justify-start' : 'justify-end xl:justify-start'}`}>
        <div className={` ${viewMovil ? 'w-full group-hover:bg-[#5b70831A]' : 'w-max rounded-full group-hover:bg-white/10'} p-3 transition-colors duration-150`}>
          <div className='flex items-center justify-start gap-5'>
            <div className={`${pathname === `/${username}` || pathname === `/${username}/media` ? 'text-white ' : 'text-transparent'}`}>
              <IconUser size='1.75rem' color='white' fill='currentColor' />
            </div>
            <div className={`${viewMovil ? 'block' : 'hidden xl:block'}`}>
              <span className={`${pathname === `/${username}` || pathname === `/${username}/media` ? 'font-semibold text-white ' : 'font-normal text-gray-200'}  text-xl`}>Perfil</span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
