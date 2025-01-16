import HeaderBackPost from '@/components/Posts/HeaderBackPost'
import { Tables } from '@/types/database.types'

interface StatusPostPageProps {
    params: {
        idPost: Tables<'tweets'>['id']
    }
}

export default function StatusPostPage ({ params: { idPost } }:StatusPostPageProps) {
  return (
    <div>
      <HeaderBackPost />
    </div>
  )
}
