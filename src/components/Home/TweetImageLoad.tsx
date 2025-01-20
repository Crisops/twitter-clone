import Image from 'next/image'
import { useCreateTweet } from '@/hooks/useStore'
import { IconX } from '@tabler/icons-react'
import { RefObject } from 'react'

interface TweetImageLoadProps {
  refFile: RefObject<HTMLInputElement>
}

export default function TweetImageLoad ({ refFile }:TweetImageLoadProps) {
  const { initialForm, setFormCreateTweet } = useCreateTweet(state => state)

  const handleOnClick = () => {
    if (refFile.current) {
      refFile.current.value = ''
    }

    setFormCreateTweet({ ...initialForm, imageUrlPreview: null, file: null })
  }

  return (
    <div className={`row-start-2 col-start-2 px-2 ${initialForm.file ? 'my-2' : ''}`}>
      {initialForm.imageUrlPreview &&
        <div className='relative w-full max-h-[720px] overflow-hidden rounded-3xl'>
          <Image className='w-full h-auto object-cover object-center' src={initialForm.imageUrlPreview} alt='Image load tweet' width={550} height={450} />
          <div className='absolute flex justify-center items-center top-2 right-2'>
            <button type='button' onClick={handleOnClick} className='p-2 rounded-full bg-slate-900/60 backdrop-blur-sm transition-colors ease-in-out hover:bg-slate-800/70'>
              <IconX color='#fff' size={17} />
            </button>
          </div>
        </div>}
    </div>
  )
}
