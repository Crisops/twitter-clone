'use client'

import { useFormTweet } from '@/hooks/useFormTweet'
import { useCreateTweet } from '@/hooks/useStore'
import { Tables } from '@/types/database.types'
import { Textarea } from '@nextui-org/react'
import { ChangeEvent, ReactNode } from 'react'
import InputFileTweet from '../Home/InputFileTweet'
import TweetImageLoad from '../Home/TweetImageLoad'

interface FormTweetClientProps {
  idSession: Tables<'users'>['id']
  children: ReactNode
}

export default function FormPostClient ({ idSession, children: avatarImage }: FormTweetClientProps) {
  const { initialForm, setFormCreateTweet } = useCreateTweet(state => state)

  const { registerField, handleSubmit, errors, watch, isSubmitting } = useFormTweet()

  const valueContent = watch('content')

  const { onChange, ...rest } = registerField('content')

  const handleOnSubmit = handleSubmit(data => {
    console.log(data, 'id:', idSession)
  })

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    onChange(e)
    setFormCreateTweet({ ...initialForm, [name]: value })
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
          placeholder='Postea tu respuesta'
          classNames={{ input: 'text-white text-xl placeholder:text-zinc-500 placeholder:font-normal', inputWrapper: 'border-none after:bg-transpatent' }}
        />
      </div>
      <TweetImageLoad />
      <div className='row-start-3 col-start-2 flex items-center justify-between px-2'>
        <InputFileTweet registerField={{ ...registerField('file') }} />
        <div>
          <button className={`text-black font-semibold py-2 px-4 rounded-full ${isSubmitting || errors.content || !valueContent?.length ? 'bg-white/40 pointer-events-none' : 'bg-slate-100'}`}>{isSubmitting ? 'Respondiendo...' : 'Responder'}</button>
        </div>
      </div>
    </form>
  )
}
