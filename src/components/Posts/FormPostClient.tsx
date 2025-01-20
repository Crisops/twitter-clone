'use client'

import { useFormTweet } from '@/hooks/useFormTweet'
import { useCreateTweet } from '@/hooks/useStore'
import { Tables } from '@/types/database.types'
import { ReactNode, useRef } from 'react'
import InputFileTweet from '../Home/InputFileTweet'
import TweetImageLoad from '../Home/TweetImageLoad'
import TextAreaForm from '@/components/shared/TextAreaForm'
import { initialCreateTweetForm } from '@/config/fields-form'
import { uploadImage } from '@/utils/supabase/storage/uploadImage'
import { insertComment } from '@/actions/actions'

interface FormTweetClientProps {
  idSession: Tables<'users'>['id']
  idTweet: Tables<'tweets'>['id']
  children: ReactNode
}

export default function FormPostClient ({ idSession, idTweet, children: avatarImage }: FormTweetClientProps) {
  const { initialForm, setFormCreateTweet } = useCreateTweet(state => state)

  const { registerField, handleSubmit, trigger, errors, isSubmitting } = useFormTweet()

  const inputFileRef = useRef<HTMLInputElement>(null)

  const handleOnSubmit = handleSubmit(async (data) => {
    const { content } = data

    if (initialForm.file) {
      const { file } = initialForm
      try {
        const { imageUrl, error } = await uploadImage({ bucket: 'posts-comments', file, folder: `${idTweet}/${idSession}` })
        if (error) throw new Error(error)
        await insertComment({ content, image_url: imageUrl, user_id: idSession, tweet_id: idTweet })
        setFormCreateTweet(initialCreateTweetForm)
        return
      } catch (error) {
        console.error(error)
        throw error
      }
    }
    await insertComment({ content, user_id: idSession, tweet_id: idTweet })
    setFormCreateTweet(initialCreateTweetForm)
  })

  return (
    <form onSubmit={handleOnSubmit} encType='multipart/form-data' className='grid grid-cols-[max-content_1fr] grid-rows-[max-content_max_content_60px] gap-x-2'>
      <div>
        {avatarImage}
      </div>
      <div className='flex-grow'>
        <TextAreaForm registerField={registerField('content')} trigger={trigger} errors={errors} placeholder='Postea tu respuesta' />
      </div>
      <TweetImageLoad refFile={inputFileRef} />
      <div className='row-start-3 col-start-2 flex items-center justify-between px-2'>
        <InputFileTweet refFile={inputFileRef} />
        <div>
          <button className={`text-black font-semibold py-2 px-4 rounded-full ${isSubmitting || errors.content ? 'bg-white/40 pointer-events-none' : 'bg-slate-100'}`}>{isSubmitting ? 'Respondiendo...' : 'Responder'}</button>
        </div>
      </div>
    </form>
  )
}
