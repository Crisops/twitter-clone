'use client'

import { ChangeEvent, useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import equal from 'fast-deep-equal'
import { Button } from '@heroui/react'
import { Tables } from '@/types/database.types'
import { FormEditProfileUser } from '@/types/store'
import { useEditProfileContext } from '@/hooks/useEditProfileContext'
import { useFormEditProfile } from '@/hooks/useFormEditProfile'
import { useEditProfile } from '@/hooks/useStore'
import { updateProfile } from '@/actions/actions'
import { uploadImageEditProfile } from '@/utils/upload-images-edit-profile'
import { initialFormEditProfileFiles } from '@/config/fields-form'
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
  const initialFormUser: FormEditProfileUser = { name, avatar_url: avatar, banner_url: bannerUrl, biography, location, web_site: webSite }
  const { updateOldData, checkEqualData, oldDataProfile, dispatch } = useEditProfileContext()
  const { registerField, handleSubmit, trigger, getValues, setValue, errors } = useFormEditProfile(initialFormUser)
  const { initialForm, setFormEditProfileFiles } = useEditProfile(state => state)
  const [errorSubmit, setErrorSubmit] = useState<string | null>(null)

  useEffect(() => {
    updateOldData(getValues())
  }, [])

  const handleUpdateFormDebounce = useDebouncedCallback(() => {
    const isEqualForm = equal(oldDataProfile.current, getValues())
    checkEqualData(isEqualForm)
  }, 1000)

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target
    if (files?.length && files?.length > 0) {
      const [file] = files
      const previousUrl = getValues()[name as keyof FormEditProfileUser] as string
      if (previousUrl) {
        URL.revokeObjectURL(previousUrl)
      }
      const imagePreview = URL.createObjectURL(file)
      setValue(name as keyof FormEditProfileUser, imagePreview, { shouldValidate: true })
      setFormEditProfileFiles(prev => ({ ...prev, [name]: file }))
    }
    handleUpdateFormDebounce()
  }

  const handleOnSubmit = handleSubmit(async data => {
    const { avatar_url: avatar, banner_url: banner } = initialForm
    const { avatar_url: defaultAvatar, banner_url: defaultBanner, ...rest } = data
    try {
      const uploadData: FormEditProfileUser = {
        avatar_url: (avatar) ? await uploadImageEditProfile(avatar, idUserSession, 'avatars') : defaultAvatar,
        banner_url: (banner) ? await uploadImageEditProfile(banner, idUserSession, 'banners') : defaultBanner,
        ...rest
      }
      const { error } = await updateProfile(idUserSession, uploadData)
      if (error) throw new Error('No se pudo actualizar el perfil. Inténtalo de nuevo.')
      setFormEditProfileFiles(initialFormEditProfileFiles)
      dispatch({ type: 'CLOSE_MODAL' })
    } catch (error) {
      console.log(error)
      setErrorSubmit((error as Error).message)
    }
  })

  return (
    <div className='w-full h-full'>
      <form onSubmit={handleOnSubmit}>
        <WrapperImagesEditProfile avatar={getValues().avatar_url} banner={getValues().banner_url} handleOnChange={handleOnChange} />
        <div className='flex flex-col gap-6 px-4 py-4'>
          <InputEdit registerName='name' errors={errors} trigger={trigger} handleOnChange={handleOnChange} registerField={registerField} label='Nombre' />
          <TextAreaBiography registerName='biography' errors={errors} trigger={trigger} handleOnChange={handleOnChange} registerField={registerField} />
          <InputEdit registerName='location' errors={errors} trigger={trigger} handleOnChange={handleOnChange} registerField={registerField} label='Ubicación' />
          <InputEdit registerName='web_site' errors={errors} trigger={trigger} handleOnChange={handleOnChange} registerField={registerField} label='Sitio Web' />
          <Button type='submit' variant='solid' radius='sm' size='lg' className='bg-white text-black font-semibold'>
            Guardar
          </Button>
          {errorSubmit && <p className='text-tiny font-bold text-red-600 text-center'>{errorSubmit}</p>}
        </div>
      </form>
    </div>
  )
}
