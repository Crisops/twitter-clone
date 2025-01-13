'use client'

import { useState } from 'react'
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader
} from '@nextui-org/react'
import Link from 'next/link'
import { Tables } from '@/types/database.types'

interface CardProfileProps {
    name: Tables<'users'>['name']
    username: Tables<'users'>['username']
    src: Tables<'users'>['avatar_url']
    biography: Tables<'users'>['biography']
    following: Tables<'users'>['following']
    followers: Tables<'users'>['followers']
}

export default function CardProfile ({ name, username, src, biography, following, followers }:CardProfileProps) {
  const [isFollowed, setIsFollowed] = useState(false)

  return (
    <Card className='max-w-[350px] w-72 border-none bg-black ' shadow='none'>
      <CardHeader className='justify-between items-start p-2'>
        <div className='flex flex-col gap-2'>
          <Link href={`/${username}`}>
            <Avatar
              className='w-16 h-16 transition-all duration-150 ease-out cursor-pointer hover:brightness-90'
              radius='full'
              src={src ?? ''}
            />
          </Link>
          <div className='flex flex-col items-start justify-center gap-1'>
            <Link href={`/${username}`} className='hover:underline'>
              <h4 className='text-large font-semibold leading-none text-gray-100'>{name}</h4>
            </Link>
            <Link href={`/${username}`}>
              <h5 className='text-small tracking-tight text-zinc-500'>@{username}</h5>
            </Link>
          </div>
        </div>
        <Button
          className='bg-white text-black font-medium text-small'
          radius='full'
          size='sm'
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? 'Siguiendo' : 'Seguir'}
        </Button>
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
        <div className='flex gap-1'>
          <p className='font-semibold text-default-600 text-small'>{following}</p>
          <p className=' text-default-400 text-small'>Seguidos</p>
        </div>
        <div className='flex gap-1'>
          <p className='font-semibold text-default-600 text-small'>{followers}</p>
          <p className='text-default-400 text-small'>Seguidores</p>
        </div>
      </CardFooter>
    </Card>
  )
}
