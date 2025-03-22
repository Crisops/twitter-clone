import { Tables } from '@/types/database.types'
import { getUserProfileByUsername } from '@/utils/supabase/getUser'
import HeaderBack from '@/components/shared/HeaderBack'
import ViewInteractivity from '../Profile/ViewInteractivity'

interface HeaderBackProfileProps{
  username: Tables<'users'>['username']
}

export default async function HeaderBackProfile ({ username }:HeaderBackProfileProps) {
  const { name } = await getUserProfileByUsername({ username })
  return (
    <HeaderBack name={name} username={username}>
      <ViewInteractivity username={username} href={[`/${username}/followers`, `/${username}/following`]} action={['Seguidores', 'Siguiendo']} />
    </HeaderBack>
  )
}
