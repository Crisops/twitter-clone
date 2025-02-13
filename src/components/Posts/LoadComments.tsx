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
        comments.map(({ id, content, image_url: imageContent, created_at: dateComment, creator }) => (
          <Comment
            key={id}
            userId={creator.id}
            tweetId={id}
            name={creator.name}
            username={creator.username}
            avatarUrl={creator.avatar_url}
            biography={creator.biography}
            followers={creator.followers}
            following={creator.following}
            content={content}
            imageContent={imageContent}
            date={dateComment}
          />
        ))
      }
    </>
  )
}
