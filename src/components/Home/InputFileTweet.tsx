import { ChangeEvent, useId } from 'react'
import { IconPhoto } from '@tabler/icons-react'
import { useCreateTweet } from '@/hooks/useStore'
import { UseFormRegisterReturn } from 'react-hook-form'

interface InputFileTweetProps {
  registerField: UseFormRegisterReturn
}

export default function InputFileTweet ({ registerField }:InputFileTweetProps) {
  const { initialForm, setFormCreateTweet } = useCreateTweet(state => state)

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
        {...registerField}
        type='file'
        className='hidden'
        onChange={handleFileChange}
      />
    </>

  )
}
