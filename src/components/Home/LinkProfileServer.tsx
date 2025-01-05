import { getSessionAuth, getUserProfile } from '@/utils/supabase/getUser'
import LinkProfileClient from './LinkProfileClient'

interface LinkProfileProps {
  viewMovil?: boolean
}

export default async function LinkProfileServer ({ viewMovil }: LinkProfileProps) {
  const { id } = await getSessionAuth()
  const { username } = await getUserProfile({ id })
  return (
    <LinkProfileClient viewMovil={viewMovil} username={username} />
  )
}
