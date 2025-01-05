'use client'

import { Tables } from '@/types/database.types'
import { IconUser } from '@tabler/icons-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface LinkProfileClientProps {
    username: Tables<'users'>['username']
    viewMovil?: boolean
}

export default function LinkProfileClient ({ viewMovil, username }:LinkProfileClientProps) {
  const pathname = usePathname()
  return (
    <li className='group'>
      <Link href={`/${username}`} className={`w-full flex  ${viewMovil ? 'justify-start' : 'justify-end xl:justify-start'}`}>
        <div className={` ${viewMovil ? 'w-full group-hover:bg-[#5b70831A]' : 'w-max rounded-full group-hover:bg-white/10'} py-3 pr-4 transition-colors duration-150`}>
          <div className='flex items-center justify-start gap-5 pl-3 pr-2'>
            <div className={`${pathname === `/${username}` ? 'text-white ' : 'text-transparent'}`}>
              <IconUser size='1.75rem' color='white' fill='currentColor' />
            </div>
            <div className={`${viewMovil ? 'block' : 'hidden xl:block'}`}>
              <span className={`${pathname === `/${username}` ? 'font-semibold text-white ' : 'font-normal text-gray-200'}  text-xl`}>Perfil</span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
