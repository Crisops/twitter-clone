import Link from 'next/link'
import { Tables } from '@/types/database.types'
import { IconCalendarWeek, IconLink, IconMapPin } from '@tabler/icons-react'
import { formatTimeJoinedUser } from '@/utils/formatTime'

interface MoreAboutMeProps {
  webSite:Tables<'users'>['web_site']
  location: Tables<'users'>['location']
  createdAt: Tables<'users'>['created_at']
}

function MoreAboutMe ({ createdAt, webSite, location }: MoreAboutMeProps) {
  return (
    <div className='flex flex-wrap items-center gap-3 [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:gap-1 mb-2'>
      {location &&
        <div>
          <IconMapPin size={20} color='#71717a' />
          <p className='text-zinc-500 text-sm'>{location}</p>
        </div>}
      {webSite &&
        <div>
          <IconLink size={20} color='#71717a' />
          <Link href='#' className='text-sky-600 hover:underline text-sm'>{webSite}</Link>
        </div>}
      <div>
        <IconCalendarWeek size={20} color='#71717a' />
        <p className='text-zinc-500 text-sm'>Se unió el {formatTimeJoinedUser(createdAt)}</p>
      </div>
    </div>
  )
}

export default MoreAboutMe
