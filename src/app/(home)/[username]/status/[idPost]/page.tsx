import { Metadata } from 'next'
import { Tables } from '@/types/database.types'
import { getTweetById } from '@/utils/supabase/getTweets'
import { ModalProvider } from '@/context/ModalComposeContext'
import HeaderBackPost from '@/components/Posts/HeaderBackPost'
import ViewPost from '@/components/Posts/ViewPost'
import { EnvConfig } from '@/config/env.config'

interface StatusPostPageProps {
    params: {
        idPost: Tables<'tweets'>['id']
    }
}

export async function generateMetadata ({ params: { idPost } }: StatusPostPageProps): Promise<Metadata> {
  const { content, image, creator } = await getTweetById({ idPost })

  const SITE_URL = EnvConfig().NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

  return {
    title: `${creator?.name} en Twitter Clone: ${content}`,
    description: `${creator?.name} en Twitter Clone: ${content} ${content}`,
    openGraph: {
      type: 'website',
      title: `${creator?.name} (@${creator?.username}) on Twitter Clone`,
      description: `${content}`,
      url: `${SITE_URL}/${creator?.username}/status/${idPost}`,
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
      <HeaderBackPost title='Post' />
      <ModalProvider>
        <ViewPost idPost={idPost} />
      </ModalProvider>
    </>
  )
}
