import { Avatar, Card, CardBody, CardHeader } from '@nextui-org/react'
import ButtonFollow from '@/components/shared/ButtonFollow'
import { Tables } from '@/types/database.types'
import Link from 'next/link'
import ToolTipProfile from '../shared/ToolTipProfile'
import RedirectWrapperServer from '../shared/RedirectWrapperServer'

interface CardFollowerProps {
  idFollower: Tables<'users'>['id']
  idUser: Tables<'users'>['id']
  idFollowing: Tables<'followers'>['user_id_following']
  name: Tables<'users'>['name']
  username: Tables<'users'>['username']
  src: Tables<'users'>['avatar_url']
  biography: Tables<'users'>['biography']
  followers: Tables<'users'>['followers'];
  following: Tables<'users'>['following'];
}

export default function CardFollower ({ idFollower, idUser, idFollowing, name, username, src, biography, followers, following }:CardFollowerProps) {
  const hiddenButtonFollow = idFollower === idUser

  const isFollowed = idUser === idFollowing

  return (
    <RedirectWrapperServer slug={`/${username}`}>
      <Card className='w-full border-none bg-transparent' shadow='none'>
        <CardHeader className='justify-between'>
          <div className='flex gap-2'>
            <ToolTipProfile id={idUser} name={name} username={username} biography={biography} followers={followers} following={following} src={src}>
              <Avatar
                className='hover:cursor-pointer hover:brightness-90'
                radius='full'
                size='md'
                src={src ?? ''}
              />
            </ToolTipProfile>
            <div className='flex flex-col items-start justify-center'>
              <Link href={`/${username}`}>
                <ToolTipProfile id={idUser} name={name} username={username} biography={biography} followers={followers} following={following} src={src}>
                  <h4 className='text-medium font-semibold leading-none text-gray-100 hover:underline'>{name}</h4>
                </ToolTipProfile>
                <ToolTipProfile id={idUser} name={name} username={username} biography={biography} followers={followers} following={following} src={src}>
                  <h5 className='text-small tracking-tight text-zinc-500'>@{username}</h5>
                </ToolTipProfile>
              </Link>
            </div>
          </div>
          <ButtonFollow idUserSession={idFollower} idUserProfile={idUser} hiddenButtonFollow={hiddenButtonFollow} validateStateInitialFollow={isFollowed} />
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
