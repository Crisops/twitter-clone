import { Avatar, Card, CardBody, CardHeader } from '@heroui/react'
import ButtonFollow from '@/components/shared/ButtonFollow'
import { Tables } from '@/types/database.types'
import Link from 'next/link'
import ToolTipProfile from '../shared/ToolTipProfile'
import RedirectWrapperServer from '../shared/RedirectWrapperServer'
import { getSessionAuth } from '@/utils/supabase/getUser'
import { getAllFollowers } from '@/utils/supabase/getFollowers'

interface CardFollowerProps {
  idUserCard: Tables<'users'>['id']
  idUserVisited: Tables<'users'>['id']
  name: Tables<'users'>['name']
  username: Tables<'users'>['username']
  src: Tables<'users'>['avatar_url']
  biography: Tables<'users'>['biography']
  followers: Tables<'users'>['followers'];
  following: Tables<'users'>['following'];
}

export default async function CardFollower ({ idUserCard, name, username, src, biography, followers, following }:CardFollowerProps) {
  const { id: idUserSession } = await getSessionAuth()
  const data = await getAllFollowers({ idUserSession })

  const hiddenButtonFollow = idUserSession === idUserCard

  const isFollowed = data.following.includes(idUserCard)

  return (
    <RedirectWrapperServer slug={`/${username}`}>
      <Card className='w-full border-none bg-transparent' shadow='none'>
        <CardHeader className='justify-between'>
          <div className='flex gap-2'>
            <ToolTipProfile id={idUserCard} name={name} username={username} biography={biography} followers={followers} following={following} src={src}>
              <Avatar
                className='hover:cursor-pointer hover:brightness-90'
                radius='full'
                size='md'
                src={src ?? ''}
              />
            </ToolTipProfile>
            <div className='flex flex-col items-start justify-center'>
              <Link href={`/${username}`}>
                <ToolTipProfile id={idUserCard} name={name} username={username} biography={biography} followers={followers} following={following} src={src}>
                  <h4 className='text-medium font-semibold leading-none text-gray-100 hover:underline'>{name}</h4>
                </ToolTipProfile>
                <ToolTipProfile id={idUserCard} name={name} username={username} biography={biography} followers={followers} following={following} src={src}>
                  <h5 className='text-small tracking-tight text-zinc-500'>@{username}</h5>
                </ToolTipProfile>
              </Link>
            </div>
          </div>
          <ButtonFollow idUserSession={idUserSession} idUserProfile={idUserCard} hiddenButtonFollow={hiddenButtonFollow} validateStateInitialFollow={isFollowed} />
        </CardHeader>
        <CardBody className='px-3 py-0'>
          <p className='text-small pl-px text-default-500'>
            {biography}
          </p>
        </CardBody>
      </Card>
    </RedirectWrapperServer>
  )
}
