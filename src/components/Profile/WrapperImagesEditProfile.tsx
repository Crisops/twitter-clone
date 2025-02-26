import { ChangeEvent } from 'react'
import { Tables } from '@/types/database.types'
import Image from 'next/image'
import UpdateImageProfile from '@/components/Profile/UpdateImageProfile'

interface WrapperImagesEditProfileProps {
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void
  avatar: Tables<'users'>['avatar_url']
  banner: Tables<'users'>['banner_url']
}

export default function WrapperImagesEditProfile ({ handleOnChange, avatar, banner }:WrapperImagesEditProfileProps) {
  return (
    <div className='relative w-full h-64'>
      <div className='absolute top-0 left-0 w-full h-48'>
        <UpdateImageProfile handleOnChange={handleOnChange} registerName='banner_url' />
        {banner
          ? <Image className='max-w-full h-full object-cover' src={banner} width={750} height={128} alt='Banner' />
          : <div className='w-full h-48 bg-black' />}
      </div>
      <div className='absolute left-0 bottom-0 w-full h-28 z-[2]'>
        <div className='relative ml-4 w-28 h-full rounded-full bg-zinc-950 outline -outline-offset-2 outline-4 outline-black overflow-hidden'>
          {
            avatar &&
              <>
                <Image
                  className='object-cover brightness-50'
                  src={avatar}
                  width={112}
                  height={112}
                  alt='Avatar User Profile'
                />
                <UpdateImageProfile handleOnChange={handleOnChange} registerName='avatar_url' />
              </>
            }
        </div>
      </div>
    </div>
  )
}
