import { Tables } from '@/types/database.types'
import Image from 'next/image'

interface WrapperImagesEditProfileProps {
    bannerUrl: Tables<'users'>['banner_url']
    avatar: Tables<'users'>['avatar_url'] | undefined
}

export default function WrapperImagesEditProfile ({ bannerUrl, avatar }:WrapperImagesEditProfileProps) {
  return (
    <div className='relative w-full h-64'>
      <div className='absolute top-0 left-0 w-full h-48'>
        {bannerUrl ? <Image className='max-w-full h-full object-cover' src={bannerUrl} width={750} height={128} alt='Banner' /> : <div className='w-full h-48 bg-zinc-800' />}
      </div>
      <div className='absolute left-0 bottom-0 w-full h-32 z-[2]'>
        <div className='ml-4 w-32 h-full rounded-full bg-zinc-950 outline -outline-offset-2 outline-4 outline-black hover:brightness-90 overflow-hidden'>
          <div>
            {
            avatar &&
              <Image
                className='object-cover'
                src={avatar}
                width={128}
                height={128}
                alt='Avatar User Profile'
              />
            }
          </div>
        </div>
      </div>
    </div>
  )
}
