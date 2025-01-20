'use client'

import InputFileTweet from './InputFileTweet'
import TweetImageLoad from './TweetImageLoad'
import { useFormTweet } from '@/hooks/useFormTweet'
import { useCreateTweet } from '@/hooks/useStore'
import { uploadImage } from '@/utils/supabase/storage/uploadImage'
import { createTweet } from '@/actions/actions'
import { initialCreateTweetForm } from '@/config/fields-form'
import { ReactNode, useRef } from 'react'
import { Tables } from '@/types/database.types'
import TextAreaForm from '../shared/TextAreaForm'

interface FormTweetClientProps {
  idSession: Tables<'users'>['id']
  children: ReactNode
}

export default function FormTweetClient ({ idSession, children: avatarImage }: FormTweetClientProps) {
  const { initialForm, setFormCreateTweet } = useCreateTweet(state => state)

  const { registerField, handleSubmit, errors, trigger, isSubmitting } = useFormTweet()
  const inputFileRef = useRef<HTMLInputElement>(null)

  const handleOnSubmit = handleSubmit(async (data) => {
    const { content } = data

    if (initialForm.file) {
      const { file } = initialForm
      try {
        const { imageUrl, error } = await uploadImage({ bucket: 'post-tweets', file, folder: idSession })
        if (error) throw new Error(error)
        await createTweet({ content, image_url: imageUrl, user_id: idSession })
        setFormCreateTweet(initialCreateTweetForm)
        return
      } catch (error) {
        console.error(error)
        throw error
      }
    }
    await createTweet({ content, user_id: idSession })
    setFormCreateTweet(initialCreateTweetForm)
  })

  return (
    <form onSubmit={handleOnSubmit} encType='multipart/form-data' className='grid grid-cols-[max-content_1fr] grid-rows-[max-content_max_content_60px] gap-x-2'>
      <div>
        {avatarImage}
      </div>
      <div className='flex-grow'>
        <TextAreaForm registerField={registerField('content')} trigger={trigger} errors={errors} placeholder='¡¿Qué está pasando?!' />
      </div>
      <TweetImageLoad refFile={inputFileRef} />
      <div className='row-start-3 col-start-2 flex items-center justify-between px-2 py-2 border-t border-zinc-800'>
        <InputFileTweet refFile={inputFileRef} />
        <div>
          <button className={`text-black font-semibold py-2 px-4 rounded-full ${isSubmitting || errors.content || !initialForm?.content.length ? 'bg-white/40 pointer-events-none' : 'bg-slate-100'}`}>{isSubmitting ? 'Publicando...' : 'Publicar'}</button>
        </div>
      </div>
    </form>
  )
}
