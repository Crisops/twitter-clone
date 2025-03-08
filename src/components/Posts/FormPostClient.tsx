'use client'

import { ChangeEvent, HTMLProps, ReactNode, useState } from 'react'
import { CreatorTweet } from '@/types/querys-db'
import { Tables } from '@/types/database.types'
import { Button } from '@heroui/button'
import { useReducerModal } from '@/hooks/useReducerModal'
import { useFormTweet } from '@/hooks/useFormTweet'
import { insertComment } from '@/actions/actions'
import { uploadImage } from '@/utils/supabase/storage/uploadImage'
import { initialCreateTweetForm } from '@/config/fields-form'
import InputFileTweet from '@/components/Home/InputFileTweet'
import ReplyingUserDesktop from '@/components/Posts/ReplyingUserDesktop'
import ReplyingUserMovile from '@/components/Posts/ReplyingUserMovile'
import TextAreaForm from '@/components/shared/TextAreaForm'
import TweetImageLoad from '@/components/Home/TweetImageLoad'

interface FormPostClientProps {
  className: HTMLProps<HTMLElement>['className']
  idSession: Tables<'users'>['id']
  idTweet: Tables<'tweets'>['id']
  creatorTweet: CreatorTweet | null
  contentTweet: Tables<'tweets'>['content']
  dateTweet: Tables<'tweets'>['created_at']
  children: ReactNode
}

export default function FormPostClient ({ className, idSession, idTweet, creatorTweet, contentTweet, dateTweet, children: avatarImage }: FormPostClientProps) {
  const { modal, dispatch } = useReducerModal()

  const { registerField, handleSubmit, trigger, errors, isSubmitting, getValues, setValue, reset } = useFormTweet({ idSession })
  const [formKey, setFormKey] = useState(Date.now())

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
    const { file, content, user_id: userId } = data
    try {
      if (file && file.length > 0) {
        const [f] = file
        const { imageUrl, error } = await uploadImage({ bucket: 'posts-comments', file: f, folder: `${idTweet}/${userId}` })
        if (error) throw new Error(error)
        await insertComment({ content, image_url: imageUrl, user_id: userId, tweet_id: idTweet })
      } else {
        await insertComment({ content, user_id: userId, tweet_id: idTweet })
      }
      if (modal.open) dispatch({ type: 'CLOSE_MODAL' })
      reset({ ...initialCreateTweetForm, user_id: idSession })
      setFormKey(Date.now())
    } catch (error) {
      console.error(error)
      throw error
    }
  })

  return (
    <form key={formKey} onSubmit={handleOnSubmit} encType='multipart/form-data' className={className}>
      <div className='relative flex flex-col gap-2'>
        {modal.open && creatorTweet && <ReplyingUserMovile name={creatorTweet.name} username={creatorTweet.username} avatar={creatorTweet.avatar_url} content={contentTweet} date={dateTweet} />}
        {
          idSession !== creatorTweet?.id && <ReplyingUserDesktop openModal={modal.open} username={creatorTweet?.username} />
        }
        <div className='relative flex gap-2 before:absolute before:right-0 before:bottom-0 before:w-11/12 before:h-px before:bg-zinc-800'>
          <div>
            {avatarImage}
          </div>
          <div className='flex-grow'>
            <TextAreaForm registerName='content' registerField={registerField} trigger={trigger} errors={errors} placeholder='Postea tu respuesta' />
          </div>
        </div>
        {getValues().file && <TweetImageLoad imagePreview={getValues().imageUrlPreview} handleRemoveImage={handleRemoveImage} />}
      </div>
      <div className='flex w-full justify-end'>
        <div className='w-11/12'>
          <div className='flex items-center justify-between px-2 py-1'>
            <InputFileTweet registerName='file' register={registerField} handleOnChange={handleOnChange} />
            <Button
              type='submit'
              size='md'
              variant='solid'
              radius='full'
              className={`text-black font-semibold py-2 px-4 rounded-full ${isSubmitting || errors.content || getValues().content.length < 1 ? 'bg-white/40 pointer-events-none' : 'bg-slate-100'}`}
            >
              {isSubmitting ? 'Respondiendo...' : 'Responder'}
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}
