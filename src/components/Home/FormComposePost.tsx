'use client'

import { ReactNode, useRef } from 'react'
import { Tables } from '@/types/database.types'
import { createTweet } from '@/actions/actions'
import { initialCreateTweetForm } from '@/config/fields-form'
import { useCreateComposeTweet } from '@/hooks/useStore'
import { uploadImage } from '@/utils/supabase/storage/uploadImage'
import { useFormTweet } from '@/hooks/useFormTweet'
import { useReducerModal } from '@/hooks/useReducerModal'
import InputFileTweet from '@/components/Home/InputFileTweet'
import TextAreaForm from '@/components/shared/TextAreaForm'
import TweetImageLoad from '@/components/Home/TweetImageLoad'

interface FormTweetClientProps {
  idSession: Tables<'users'>['id']
  children: ReactNode
}

export default function FormComposePost ({ children: avatarImage, idSession }:FormTweetClientProps) {
  const { initialForm, setFormCreateTweet } = useCreateComposeTweet(state => state)
  const { modal, dispatch } = useReducerModal()

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
        if (modal.open) dispatch({ type: 'CLOSE_MODAL' })
        setFormCreateTweet(initialCreateTweetForm)
        return
      } catch (error) {
        console.error(error)
        throw error
      }
    }
    await createTweet({ content, user_id: idSession })
    if (modal.open) dispatch({ type: 'CLOSE_MODAL' })
    setFormCreateTweet(initialCreateTweetForm)
  })

  return (
    <form onSubmit={handleOnSubmit} encType='multipart/form-data' className='flex flex-col w-full h-full'>
      <div className='flex flex-col gap-2 border-b border-zinc-700'>
        <div className='flex gap-2'>
          <div>
            {avatarImage}
          </div>
          <div className='flex-grow'>
            <TextAreaForm registerField={registerField('content')} trigger={trigger} errors={errors} placeholder='¡¿Qué está pasando?!' useStoreHook={useCreateComposeTweet} />
          </div>
        </div>
        {initialForm.file && <TweetImageLoad refFile={inputFileRef} useStoreHook={useCreateComposeTweet} />}
      </div>
      <div className='flex items-center justify-between px-2 py-2 border-t border-zinc-800'>
        <InputFileTweet refFile={inputFileRef} useStoreHook={useCreateComposeTweet} />
        <button className={`text-black font-semibold py-2 px-4 rounded-full ${isSubmitting || errors.content || !initialForm?.content.length ? 'bg-white/40 pointer-events-none' : 'bg-slate-100'}`}>{isSubmitting ? 'Publicando...' : 'Publicar'}</button>
      </div>
    </form>
  )
}
