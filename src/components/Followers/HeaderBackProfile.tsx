import { Tables } from '@/types/database.types'
import { getUserProfileByUsername } from '@/utils/supabase/getUser'
import ButtonInteractivity from '@/components/shared/ButtonInteractivity'
import HeaderBack from '@/components/shared/HeaderBack'

interface HeaderBackProfileProps{
  username: Tables<'users'>['username']
}

export default async function HeaderBackProfile ({ username }:HeaderBackProfileProps) {
  const { name } = await getUserProfileByUsername({ username })
  return (
    <HeaderBack name={name} username={username}>
      <div className='flex [&>div]:flex-grow [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div>button]:w-full [&>div>button]:h-full'>
        <ButtonInteractivity href={`/${username}/followers`} text='Seguidores' />
        <ButtonInteractivity href={`/${username}/following`} text='Siguiendo' />
      </div>
    </HeaderBack>
  )
}
