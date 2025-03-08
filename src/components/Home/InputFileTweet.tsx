import { ChangeEvent } from 'react'
import { IconPhoto } from '@tabler/icons-react'
import { Input } from '@heroui/react'
import { FormCreateTweet } from '@/types/store'
import { UseFormRegisterReturn } from 'react-hook-form'

interface InputFileTweetProps {
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void
  register: (name: keyof FormCreateTweet) => UseFormRegisterReturn<keyof FormCreateTweet>
  registerName: keyof FormCreateTweet
}

export default function InputFileTweet ({ handleOnChange, register, registerName }: InputFileTweetProps) {
  const { onChange, ...rest } = register(registerName)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e)
    handleOnChange(e)
  }

  return (
    <>
      <Input
        type='file'
        accept='image/*'
        disableAnimation
        className='w-12 h-12 cursor-pointer'
        classNames={{ inputWrapper: ['bg-transparent data-[hover=true]:bg-transparent !cursor-pointer group-data-[focus=true]:bg-sky-500/5'], input: ['sr-only'], label: ['pe-0 top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 group-data-[filled-within=true]:scale-100 cursor-pointer'] }}
        onChange={handleFileChange}
        label={<IconPhoto size={18} color='#1d9bf0' />}
        {...rest}
      />
    </>

  )
}
