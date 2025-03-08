import { Tables } from '@/types/database.types'
import TweetCreatedTime from '@/components/shared/TweetCreatedTime'
import { Avatar } from '@heroui/react'

interface ReplyingUserProps {
  name: Tables<'users'>['name']
  username: Tables<'users'>['username']
  avatar: Tables<'users'>['avatar_url']
  content: Tables<'tweets'>['content']
  date: Tables<'tweets'>['created_at'] | Tables<'comments'>['created_at']
}

function ReplyingUserMovile ({ name, username, avatar, content, date }: ReplyingUserProps) {
  return (
    <section className='w-full'>
      <div className='flex gap-x-2 items-start'>
        <div className='h-full'>
          <Avatar className='shrink-0' radius='full' size='md' src={avatar ?? ''} alt={`${name} - ${username}`} />
          <div className='relative top-0 left-1/2 -translate-x-1/2 w-px h-full bg-zinc-500' />
        </div>
        <div>
          <header className='w-full'>
            <div className='flex items-center gap-x-1'>
              <div className='flex gap-x-1 items-center'>
                <h4 className='text-white font-medium text-large'>{name}</h4>
                <h5 className='text-zinc-500 font-normal'>@{username}</h5>
              </div>
              <TweetCreatedTime date={date} />
            </div>
          </header>
          <section>
            <p>{content}</p>
          </section>
        </div>
      </div>
    </section>
  )
}

export default ReplyingUserMovile
