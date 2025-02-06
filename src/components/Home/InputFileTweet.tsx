import { ChangeEvent, RefObject, useId } from 'react'
import { IconPhoto } from '@tabler/icons-react'
import { StoreApi, UseBoundStore } from 'zustand'
import { StoreCreateTweet } from '@/types/store'

interface InputFileTweetProps {
  refFile: RefObject<HTMLInputElement>
  useStoreHook: UseBoundStore<StoreApi<StoreCreateTweet>>
}

export default function InputFileTweet ({ refFile, useStoreHook }: InputFileTweetProps) {
  const { initialForm, setFormCreateTweet } = useStoreHook(state => state)

  const idFile = useId()

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target

    if (files?.length) {
      const [file] = files
      const imageUrlPreview = file ? URL.createObjectURL(file) : null
      setFormCreateTweet({ ...initialForm, file, imageUrlPreview })
    }
  }

  return (
    <>
      <label
        htmlFor={idFile}
        title='Multimedia'
        className='cursor-pointer'
      >
        <IconPhoto size={18} color='#1d9bf0' />
      </label>
      <input
        id={idFile}
        ref={refFile}
        name='file'
        type='file'
        className='hidden'
        onChange={handleFileChange}
      />
    </>

  )
}
