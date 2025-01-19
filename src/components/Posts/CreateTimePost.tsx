import { Tables } from '@/types/database.types'
import { formatTimePost } from '@/utils/formatTime'

interface CreateTimePostProps {
    date: Tables<'tweets'>['created_at']
}

export default function CreateTimePost ({ date }: CreateTimePostProps) {
  return (
    <div className='py-3'>
      <span className='text-zinc-500 text-base'>{formatTimePost(date)}</span>
    </div>
  )
}
