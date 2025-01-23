import HeaderBackPost from '@/components/Posts/HeaderBackPost'
import ViewPost from '@/components/Posts/ViewPost'
import { Tables } from '@/types/database.types'

interface StatusPostPageProps {
    params: {
        idPost: Tables<'tweets'>['id']
    }
}

export default function StatusPostPage ({ params: { idPost } }:StatusPostPageProps) {
  return (
    <>
      <HeaderBackPost />
      <ViewPost idPost={idPost} />
    </>
  )
}
