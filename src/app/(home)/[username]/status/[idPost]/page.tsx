import HeaderBackPost from '@/components/Posts/HeaderBackPost'
import ViewPost from '@/components/Posts/ViewPost'
import { Tables } from '@/types/database.types'
import { getTweetById } from '@/utils/supabase/getTweets'
import { Metadata } from 'next'

interface StatusPostPageProps {
    params: {
        idPost: Tables<'tweets'>['id']
    }
}

export async function generateMetadata ({ params: { idPost } }: StatusPostPageProps): Promise<Metadata> {
  const { content, image, creator } = await getTweetById({ idPost })

  return {
    title: `${creator?.name} en Twitter Clone: ${content}`,
    description: `${creator?.name} en Twitter Clone: ${content} ${content}`,
    openGraph: {
      type: 'website',
      title: `${creator?.name} (@${creator?.username}) on Twitter Clone`,
      description: `${content}`,
      url: `http://localhost:3000/${creator?.username}/status/${idPost}`,
      siteName: 'Twitter Clone',
      images: [
        {
          url: `${image}`,
          width: 800,
          height: 800,
          alt: `${creator?.name} (@${creator?.username}) on Twitter Clone: ${content}`
        }
      ]
    }
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
