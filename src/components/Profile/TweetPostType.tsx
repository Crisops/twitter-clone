import { Tables } from '@/types/database.types'
import { IconRepeat } from '@tabler/icons-react'
import { getSessionAuth } from '@/utils/supabase/getUser'

interface TweetPostTypeProps {
  idUserVisited: Tables<'users'>['id']
  nameUserVisited: Tables<'users'>['name']
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
