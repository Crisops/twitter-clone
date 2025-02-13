import { ModalDeletePostProvider } from '@/context/ModalDeletePostContext'
import PopoverOptionsPost from './PopoverOptionsPostClient'
import { Tables } from '@/types/database.types'
import { getSessionAuth } from '@/utils/supabase/getUser'

interface PopoverOptionsPostServerPros {
    userIdCreatorPost: Tables<'users'>['id']
    tweetId: Tables<'tweets'>['id']
}

export default async function PopoverOptionsPostServer ({ userIdCreatorPost, tweetId }:PopoverOptionsPostServerPros) {
  const { id } = await getSessionAuth()

  return (
    <ModalDeletePostProvider>
      <PopoverOptionsPost idUserSession={id} userId={userIdCreatorPost} tweetId={tweetId} />
    </ModalDeletePostProvider>
  )
}
