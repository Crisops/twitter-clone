import { getSessionAuth, getUserProfile } from '@/utils/supabase/getUser'
import { IconUser } from '@tabler/icons-react'
import Link from 'next/link'

interface LinkProfileProps {
  viewMovil?: boolean
}

export default async function LinkProfile ({ viewMovil }: LinkProfileProps) {
  const { id } = await getSessionAuth()
  const { username } = await getUserProfile({ id })
  return (
    <li className='group'>
      <Link href={`/@${username}`} className={`w-full flex  ${viewMovil ? 'justify-start' : 'justify-end xl:justify-start'}`}>
        <div className={` ${viewMovil ? 'w-full group-hover:bg-[#5b70831A]' : 'w-max rounded-full group-hover:bg-white/10'} py-3 pr-4 transition-colors duration-150`}>
          <div className='flex items-center justify-start gap-5 pl-3 pr-2'>
            <div>
              <IconUser size='1.75rem' />
            </div>
            <div className={`${viewMovil ? 'block' : 'hidden xl:block'}`}>
              <span className='text-white font-semibold text-xl'>Profile</span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
