import { ChangeEvent } from 'react'
import { FormCreateTweet } from '@/types/store'
import { FieldErrors, UseFormRegisterReturn, UseFormTrigger } from 'react-hook-form'
import { Textarea } from '@heroui/react'

interface TextAreaFormProps {
    registerField:(name: keyof FormCreateTweet) => UseFormRegisterReturn<keyof FormCreateTweet>
    registerName: keyof FormCreateTweet
    trigger: UseFormTrigger<FormCreateTweet>
    errors: FieldErrors<FormCreateTweet>
    placeholder: string | undefined
}

export default function TextAreaForm ({ registerField, trigger, errors, placeholder, registerName }: TextAreaFormProps) {
  const { onChange, ...rest } = registerField(registerName)

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e)
    trigger('content')
  }

  return (
    <Textarea
      classNames={{ input: 'text-white text-xl placeholder:text-zinc-500 placeholder:font-normal', inputWrapper: 'border-none after:bg-transpatent' }}
      disableAnimation
      radius='none'
      minRows={2}
      variant='underlined'
      placeholder={placeholder}
      errorMessage={errors.content?.message}
      isInvalid={!!errors.content}
      {...rest}
      onChange={handleOnChange}
    />
  )
}
