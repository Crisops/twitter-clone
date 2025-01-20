import { getSessionAuth, getUserProfile } from '@/utils/supabase/getUser'
import FormPostClient from './FormPostClient'
import TweetImageUser from '../Home/TweetImageUser'
import { Tables } from '@/types/database.types'

interface FormPostServerProps {
  idPost: Tables<'tweets'>['id']
}

export default async function FormPostServer ({ idPost }: FormPostServerProps) {
  const { id } = await getSessionAuth()
  const { name, username, avatar_url: avatar } = await getUserProfile({ id })
  return (
    <FormPostClient idSession={id} idTweet={idPost}>
      <TweetImageUser avatar_url={avatar} name={name} username={username} />
    </FormPostClient>
  )
}
