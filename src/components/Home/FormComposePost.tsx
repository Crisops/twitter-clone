'use client'

import { ChangeEvent, HTMLProps, ReactNode, useState } from 'react'
import { Tables } from '@/types/database.types'
import { createTweet } from '@/actions/actions'
import { useFormTweet } from '@/hooks/useFormTweet'
import { useReducerModal } from '@/hooks/useReducerModal'
import { uploadImage } from '@/utils/supabase/storage/uploadImage'
import { addToast } from '@/lib/toast'
import { initialCreateTweetForm } from '@/config/fields-form'
import Button from '@/components/shared/Button'
import InputFileTweet from '@/components/Home/InputFileTweet'
import TextAreaForm from '@/components/shared/TextAreaForm'
import TweetImageLoad from '@/components/Home/TweetImageLoad'
import { EnvConfig } from '@/config/env.config'

interface FormComposePostProps {
  idSession: Tables<'users'>['id']
  className: HTMLProps<HTMLElement>['className']
  children: ReactNode
}

export default function FormComposePost ({ className, children: avatarImage, idSession }:FormComposePostProps) {
  const { modal, dispatch } = useReducerModal()
  const [formKey, setFormKey] = useState(Date.now())

  const SITE_URL = EnvConfig().NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

  console.log(SITE_URL)

  const { registerField, handleSubmit, errors, trigger, isSubmitting, getValues, setValue, reset } = useFormTweet({ idSession })

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    if (files?.length && files?.length > 0) {
      const [file] = files
      const previousUrl = getValues().imageUrlPreview
      if (previousUrl) {
        URL.revokeObjectURL(previousUrl)
      }
      const imagePreview = URL.createObjectURL(file)
      setValue('imageUrlPreview', imagePreview, { shouldValidate: true })
    }
  }

  const handleRemoveImage = () => {
    setValue('imageUrlPreview', null, { shouldValidate: true })
    setValue('file', null)
  }

  const handleOnSubmit = handleSubmit(async (data) => {
    addToast({ message: 'Publicando post' })
    const { file, content, user_id: userId } = data
    try {
      if (file && file.length > 0) {
        const [f] = file
        const { imageUrl, error } = await uploadImage({ bucket: 'post-tweets', file: f, folder: idSession })
        if (error) throw new Error(error)
        await createTweet({ content, image_url: imageUrl, user_id: userId })
      } else {
        await createTweet({ content, user_id: userId })
      }
      if (modal.open) dispatch({ type: 'CLOSE_MODAL' })
      reset({ ...initialCreateTweetForm, user_id: idSession })
      setFormKey(Date.now())
      addToast({ message: 'Post publicado' })
    } catch (error) {
      addToast({ message: 'Error. algo fallo al publicar tu post', timeout: 3000 })
      console.error(error)
      throw error
    }
  })

  return (
    <form key={formKey} onSubmit={handleOnSubmit} encType='multipart/form-data' className={className}>
      <div className='flex flex-col gap-2'>
        <div className='relative flex gap-2 before:absolute before:right-0 before:bottom-0 before:w-11/12 before:h-px before:bg-zinc-800'>
          <div>
            {avatarImage}
          </div>
          <div className='flex-grow'>
            <TextAreaForm registerName='content' registerField={registerField} trigger={trigger} errors={errors} placeholder='¡¿Qué está pasando?!' />
          </div>
        </div>
        {getValues().imageUrlPreview && <TweetImageLoad imagePreview={getValues().imageUrlPreview} handleRemoveImage={handleRemoveImage} />}
      </div>
      <div className='flex w-full justify-end'>
        <div className='w-11/12'>
          <div className='flex items-center justify-between px-2 py-2'>
            <InputFileTweet registerName='file' register={registerField} handleOnChange={handleOnChange} />
            <Button
              type='submit'
              size='md'
              variant='solid'
              radius='full'
              className={`text-black font-semibold py-2 px-4 rounded-full ${isSubmitting || errors.content || getValues().content.length < 1 ? 'bg-white/40 pointer-events-none' : 'bg-slate-100'}`}
            >
              {isSubmitting ? 'Publicando...' : 'Publicar'}
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}
