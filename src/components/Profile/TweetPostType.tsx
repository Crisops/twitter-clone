import { getSessionAuth } from '@/utils/supabase/getUser'
import { IconRepeat } from '@tabler/icons-react'

interface TweetPostTypeProps {
  idUserVisited: string
  nameUserVisited: string
}

async function TweetPostType ({ idUserVisited, nameUserVisited }:TweetPostTypeProps) {
  const { id } = await getSessionAuth()

  const text = id === idUserVisited ? 'Reposteaste' : `${nameUserVisited} reposteó`

  return (
    <div className='flex items-center ml-6 gap-1'>
      <div>
        <IconRepeat size={16} className='stroke-zinc-500' />
      </div>
      <div className='inline-flex'>
        <span className='text-sm text-zinc-500 font-medium'>{text}</span>
      </div>
    </div>
  )
}

export default TweetPostType
