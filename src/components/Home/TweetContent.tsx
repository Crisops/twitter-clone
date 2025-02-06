import { Tables } from '@/types/database.types'
import { getBase64 } from '@/utils/getBase64'
import Image from 'next/image'

interface TweetContentProps {
  content: Tables<'tweets'>['content'] | Tables<'comments'>['content']
  image_url: Tables<'tweets'>['image_url'] | Tables<'comments'>['image_url']
  className?: string
}

export default async function TweetContent ({ content, image_url: url, className }: TweetContentProps) {
  let dataUrl: string = ''

  const NEW_WIDTH_IMAGE = 700
  const NEW_HEIGHT_IMAGE = 600
  let WIDTH_IMAGE
  let HEIGHT_IMAGE

  if (url) {
    const { base64, width, height } = await getBase64({ url })
    dataUrl = base64
    WIDTH_IMAGE = width > 800 ? Math.round((NEW_HEIGHT_IMAGE * width) / height) : width
    HEIGHT_IMAGE = height > 800 ? Math.round((NEW_WIDTH_IMAGE * height) / width) : height
  }

  return (
    <div className='mb-2'>
      <div className='mb-2'>
        <p className={className}>{content}</p>
      </div>
      <div className='w-full h-full'>
        <div className='flex'>
          {url &&
            <Image
              className='rounded-2xl border border-zinc-800'
              src={url}
              width={WIDTH_IMAGE}
              height={HEIGHT_IMAGE}
              blurDataURL={dataUrl}
              placeholder='blur'
              alt='Descripción de la imagén'
            />}
        </div>
      </div>
    </div>
  )
}
