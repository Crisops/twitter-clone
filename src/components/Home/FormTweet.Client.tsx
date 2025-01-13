'use client'

import { Textarea } from '@nextui-org/react'
import InputFileTweet from './InputFileTweet'
import TweetImageLoad from './TweetImageLoad'
import { useFormTweet } from '@/hooks/useFormTweet'
import { useCreateTweet } from '@/hooks/useStore'
import { uploadImage } from '@/utils/supabase/storage/uploadImage'
import { createTweet } from '@/actions/actions'
import { initialCreateTweetForm } from '@/config/fields-form'
import { ChangeEvent, ReactNode } from 'react'
import { Tables } from '@/types/database.types'

interface FormTweetClientProps {
  idSession: Tables<'users'>['id']
  children: ReactNode
}

export default function FormTweetClient ({ idSession, children: avatarImage }: FormTweetClientProps) {
  const { initialForm, setFormCreateTweet } = useCreateTweet(state => state)

  const { registerField, handleSubmit, errors, watch, isSubmitting } = useFormTweet()

  const valueContent = watch('content')

  const { onChange, ...rest } = registerField('content')

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

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormCreateTweet({ ...initialForm, [name]: value })
    onChange(e)
  }

  return (
    <form onSubmit={handleOnSubmit} encType='multipart/form-data' className='grid grid-cols-[max-content_1fr] grid-rows-[max-content_max_content_60px] gap-x-2'>
      <div>
        {avatarImage}
      </div>
      <div className='flex-grow'>
        <Textarea
          onChange={handleOnChange}
          isInvalid={!!errors.content}
          errorMessage={errors.content?.message}
          {...rest}
          value={initialForm.content}
          disableAnimation
          radius='none'
          minRows={2}
          variant='underlined'
          placeholder='¡¿Qué está pasandó?!'
          classNames={{ input: 'text-white text-xl placeholder:text-zinc-500 placeholder:font-normal', inputWrapper: 'border-none after:bg-transpatent' }}
        />
      </div>
      <TweetImageLoad />
      <div className='row-start-3 col-start-2 flex items-center justify-between px-2 py-2 border-t border-zinc-800'>
        <InputFileTweet registerField={{ ...registerField('file') }} />
        <div>
          <button className={`text-black font-semibold py-2 px-4 rounded-full ${isSubmitting || errors.content || !valueContent?.length ? 'bg-white/40 pointer-events-none' : 'bg-slate-100'}`}>{isSubmitting ? 'Publicando...' : 'Publicar'}</button>
        </div>
      </div>
    </form>
  )
}
