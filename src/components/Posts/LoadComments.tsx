import { Tables } from '@/types/database.types'
import { getCommentsTweetById } from '@/utils/supabase/getComments'
import Comment from '@/components/Posts/Comment'

interface LoadCommentsProps {
  idTweet: Tables<'tweets'>['id']
}

export default async function LoadComments ({ idTweet }:LoadCommentsProps) {
  const comments = await getCommentsTweetById({ idTweet })

  return (
    <>
      {
        comments.map(comment => (
          <Comment
            key={comment.id}
            userId={comment.creator?.id ?? ''}
            tweetId={comment.id}
            name={comment.creator?.name ?? ''}
            username={comment.creator?.username ?? ''}
            avatarUrl={comment.creator?.avatar_url ?? ''}
            biography={comment.creator?.biography ?? ''}
            followers={comment.creator?.followers ?? 0}
            following={comment.creator?.following ?? 0}
            content={comment.content}
            imageContent={comment.image_url ?? ''}
            date={comment.created_at}
          />
        ))
      }
    </>
  )
}
