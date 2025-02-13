import { Tables } from '@/types/database.types'
import { getSessionAuth } from '@/utils/supabase/getUser'
import ButtonEditProfile from '@/components/Profile/ButtonEditProfile'
import ButtonFollowProfile from '@/components/Profile/ButtonFollowProfile'
import Image from 'next/image'
import Link from 'next/link'

interface PictureProfileProps {
  idUserVisited: Tables<'users'>['id']
  username: Tables<'users'>['username']
  bannerUrl: Tables<'users'>['banner_url']
  avatarUrl: Tables<'users'>['avatar_url']
}

async function PictureProfile ({ idUserVisited, username, avatarUrl, bannerUrl } :PictureProfileProps) {
  const { id } = await getSessionAuth()

  const verifyIdUserProfile = id === idUserVisited

  return (
    <div className='relative w-full h-64'>
      <div className='absolute top-0 left-0 w-full h-48'>
        {bannerUrl ? <Image className='max-w-full h-full object-cover' src={bannerUrl} width={750} height={128} alt='Banner' /> : <div className='w-full h-48 bg-zinc-800' />}
      </div>
      <div className='absolute left-0 bottom-0 w-full h-32 z-[2]'>
        <div className='ml-4 w-32 h-full rounded-full bg-zinc-950 outline -outline-offset-2 outline-4 outline-black hover:brightness-90 overflow-hidden'>
          <button className='block w-full h-full'>
            <Link href={`/${username}/photo`} className='block w-full h-full'>
              <Image
                className='object-cover'
                src={avatarUrl ?? ''}
                width={128}
                height={128}
                alt='Avatar User Profile'
              />
            </Link>
          </button>
        </div>
        <div className='absolute top-20 right-4 h-full'>
          {verifyIdUserProfile ? <ButtonEditProfile /> : <ButtonFollowProfile />}
        </div>
      </div>
    </div>
  )
}

export default PictureProfile
