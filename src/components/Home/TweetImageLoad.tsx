import { IconX } from '@tabler/icons-react'
import Image from 'next/image'
import { FormCreateTweet } from '@/types/store'
import { Button } from '@heroui/button'

interface TweetImageLoadProps {
  handleRemoveImage: () => void
  imagePreview: FormCreateTweet['imageUrlPreview']
}

export default function TweetImageLoad ({ imagePreview, handleRemoveImage }:TweetImageLoadProps) {
  return (
    <div className={`row-start-2 col-start-2 px-2 ${imagePreview ? 'my-2' : ''}`}>
      <div className='relative w-full max-h-[720px] overflow-hidden rounded-3xl'>
        <Image className='w-full h-auto object-cover object-center' src={imagePreview ?? ''} alt='Image load tweet' width={550} height={450} />
        <div className='absolute flex justify-center items-center top-2 right-2'>
          <Button type='button' onPress={handleRemoveImage} isIconOnly variant='solid' radius='full' className='p-2 bg-slate-900/60 backdrop-blur-sm transition-colors ease-in-out hover:bg-slate-800/70'>
            <IconX color='#fff' size={17} />
          </Button>
        </div>
      </div>
    </div>
  )
}
