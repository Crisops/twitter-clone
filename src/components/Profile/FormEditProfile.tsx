'use client'

import { useEffect } from 'react'
import { Tables } from '@/types/database.types'
import { Button } from '@heroui/react'
import { useEditProfileContext } from '@/hooks/useEditProfileContext'
import InputEdit from '@/components/Profile/InputEdit'
import TextAreaBiography from '@/components/Profile/TextAreaBiography'
import WrapperImagesEditProfile from '@/components/Profile/WrapperImagesEditProfile'

interface FormEditProfileProps {
  name: Tables<'users'>['name']
  avatar: Tables<'users'>['avatar_url']
  bannerUrl: Tables<'users'>['banner_url']
  biography: Tables<'users'>['biography']
  location: Tables<'users'>['location']
  webSite: Tables<'users'>['web_site']
}

export default function FormEditProfile ({ name, avatar, bannerUrl, biography, location, webSite }: FormEditProfileProps) {
  const { updateOldData } = useEditProfileContext()

  useEffect(() => {
    updateOldData({ name, avatar, bannerUrl, biography, location, webSite })
  }, [])

  return (
    <div className='w-full h-full'>
      <form>
        <WrapperImagesEditProfile bannerUrl={bannerUrl} avatar={avatar} />
        <div className='flex flex-col gap-6 px-4 py-4'>
          <InputEdit registerName='name' label='Nombre' defaultValue={name} />
          <TextAreaBiography biography={biography} />
          <InputEdit registerName='location' label='Ubicación' defaultValue={location ?? ''} />
          <InputEdit registerName='webSite' label='Sitio Web' defaultValue={webSite ?? ''} />
          <Button variant='solid' radius='sm' size='lg' className='bg-white text-black font-semibold'>
            Guardar
          </Button>
        </div>
      </form>
    </div>
  )
}
