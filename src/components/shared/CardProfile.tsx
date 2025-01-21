import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader
} from '@nextui-org/react'
import Link from 'next/link'
import { Tables } from '@/types/database.types'

import ButtonFollow from './ButtonFollow'
import { getAllFollowers } from '@/utils/supabase/getFollowers'
import { getSessionAuth } from '@/utils/supabase/getUser'

interface CardProfileProps {
  id:Tables<'users'>['id']
  name: Tables<'users'>['name']
  username: Tables<'users'>['username']
  src: Tables<'users'>['avatar_url']
  biography: Tables<'users'>['biography']
  following: Tables<'users'>['following']
  followers: Tables<'users'>['followers']
}

export default async function CardProfile ({ id, name, username, src, biography, following, followers }:CardProfileProps) {
  const { id: idUserSession } = await getSessionAuth()

  const data = await getAllFollowers({ idUserSession })

  const hiddenButtonFollow = idUserSession === id
  const validateStateInitialFollow = data.following.includes(id)

  return (
    <div data-no-redirect>
      <Card className='max-w-[350px] w-72 border-none bg-black ' shadow='none'>
        <CardHeader className='justify-between items-start p-2'>
          <div className='flex flex-col gap-2'>
            <Link href={`/${username}`}>
              <Avatar
                className='w-16 h-16 transition-all duration-150 ease-out hover:cursor-pointer hover:brightness-90'
                radius='full'
                src={src ?? ''}
              />
            </Link>
            <div className='flex flex-col items-start justify-center gap-1'>
              <Link href={`/${username}`}>
                <h4 className='text-large font-semibold leading-none text-gray-100 hover:underline'>{name}</h4>
                <h5 className='text-small tracking-tight text-zinc-500'>@{username}</h5>
              </Link>
            </div>
          </div>
          <ButtonFollow idUserSession={idUserSession} idUserProfile={id} hiddenButtonFollow={hiddenButtonFollow} validateStateInitialFollow={validateStateInitialFollow} />
        </CardHeader>
        <CardBody className='px-3 py-0'>
          {
            biography &&
              <p className='text-small pl-px text-gray-100'>
                {biography}
              </p>
        }
        </CardBody>
        <CardFooter className='gap-3'>
          <Link href={`/${username}/following`} className='hover:underline'>
            <div className='flex gap-1'>
              <p className='font-semibold text-default-600 text-small'>{following}</p>
              <p className=' text-default-400 text-small'>Siguiendo</p>
            </div>
          </Link>
          <Link href={`/${username}/followers`} className='hover:underline'>
            <div className='flex gap-1'>
              <p className='font-semibold text-default-600 text-small'>{followers}</p>
              <p className='text-default-400 text-small'>Seguidores</p>
            </div>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
