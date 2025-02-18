'use client'

import { FormEvent, useEffect, useState } from 'react'
import { Tables } from '@/types/database.types'
import { Button } from '@heroui/react'
import { updateProfile } from '@/actions/actions'
import { useEditProfileContext } from '@/hooks/useEditProfileContext'
import InputEdit from '@/components/Profile/InputEdit'
import TextAreaBiography from '@/components/Profile/TextAreaBiography'
import WrapperImagesEditProfile from '@/components/Profile/WrapperImagesEditProfile'

interface FormEditProfileProps {
  idUserSession: Tables<'users'>['id']
  name: Tables<'users'>['name']
  avatar_url: Tables<'users'>['avatar_url']
  banner_url: Tables<'users'>['banner_url']
  biography: Tables<'users'>['biography']
  location: Tables<'users'>['location']
  web_site: Tables<'users'>['web_site']
}

export default function FormEditProfile ({ idUserSession, name, avatar_url: avatar, banner_url: bannerUrl, biography, location, web_site: webSite }: FormEditProfileProps) {
  const { initialForm, isEqualData, dispatch, updateOldData } = useEditProfileContext()
  const [messageError, setMessageError] = useState<string | null>(null)

  useEffect(() => {
    updateOldData({ name, avatar_url: avatar, banner_url: bannerUrl, biography, location, web_site: webSite })
  }, [])

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isEqualData) {
      dispatch({ type: 'CLOSE_MODAL' })
    }

    const { error } = await updateProfile(idUserSession, initialForm)
    if (error) setMessageError('Algo fallo al momento de actualizar tu perfíl. Intentalo de nuevo')
    dispatch({ type: 'CLOSE_MODAL' })
  }

  return (
    <div className='w-full h-full'>
      <form onSubmit={onSubmit}>
        <WrapperImagesEditProfile bannerUrl={bannerUrl} avatar={avatar} />
        <div className='flex flex-col gap-6 px-4 py-4'>
          <InputEdit registerName='name' label='Nombre' defaultValue={name} />
          <TextAreaBiography biography={biography} />
          <InputEdit registerName='location' label='Ubicación' defaultValue={location ?? ''} />
          <InputEdit registerName='web_site' label='Sitio Web' defaultValue={webSite ?? ''} />
          <Button type='submit' variant='solid' radius='sm' size='lg' className='bg-white text-black font-semibold'>
            Guardar
          </Button>
          {messageError && <p className='text-tiny font-bold text-red-600 text-center'>{messageError}</p>}
        </div>
      </form>
    </div>
  )
}
