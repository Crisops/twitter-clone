import { Avatar, Card, CardHeader } from '@heroui/react'
import { Tables } from '@/types/database.types'
import RedirectWrapperServer from '@/components/shared/RedirectWrapperServer'

interface CardSearchProps {
  name: Tables<'users'>['name']
  username: Tables<'users'>['username']
  src: Tables<'users'>['avatar_url']
}

export default function CardSearch ({ name, username, src }:CardSearchProps) {
  return (
    <RedirectWrapperServer slug={`/${username}`}>
      <Card className='w-full border-none bg-transparent' shadow='none'>
        <CardHeader className='justify-between px-3 py-2'>
          <div className='flex gap-2'>
            <Avatar
              className='hover:cursor-pointer hover:brightness-90'
              radius='full'
              size='md'
              src={src ?? ''}
            />
            <div className='flex flex-col items-start justify-center'>
              <h4 className='text-medium font-semibold leading-none text-gray-100'>{name}</h4>
              <h5 className='text-medium tracking-tight text-zinc-500'>@{username}</h5>
            </div>
          </div>
        </CardHeader>
      </Card>
    </RedirectWrapperServer>
  )
}
