import { Tables } from '@/types/database.types'
import { getBase64 } from '@/utils/getBase64'
import Image from 'next/image'

interface TweetContentProps {
  content: Tables<'tweets'>['content'],
  image_url: Tables<'tweets'>['image_url']
}

export default async function TweetContent ({ content, image_url: url }: TweetContentProps) {
  let dataUrl: string = ''
  let w: number = 0
  let h: number = 0

  if (url) {
    const { base64, width, height } = await getBase64({ url })
    dataUrl = base64
    w = width
    h = height
  }

  return (
    <>
      <div className='mb-2'>
        <p>{content}</p>
      </div>
      <div className='w-full h-full'>
        <div className='flex'>
          {url &&
            <Image
              className='rounded-2xl border border-zinc-800'
              src={url}
              width={w}
              height={h}
              blurDataURL={dataUrl}
              placeholder='blur'
              alt='Descripción de la imagén'
            />}
        </div>
      </div>
    </>
  )
}
