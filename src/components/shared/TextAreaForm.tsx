import { useCreateTweet } from '@/hooks/useStore'
import { FormCreateTweet } from '@/types/store'
import { Textarea } from '@nextui-org/react'
import { ChangeEvent } from 'react'
import { FieldErrors, UseFormRegisterReturn, UseFormTrigger } from 'react-hook-form'

interface TextAreaFormProps {
    registerField: UseFormRegisterReturn
    trigger: UseFormTrigger<FormCreateTweet>
    errors: FieldErrors<FormCreateTweet>
    placeholder: string | undefined
}

export default function TextAreaForm ({ registerField, trigger, errors, placeholder }: TextAreaFormProps) {
  const { initialForm, setFormCreateTweet } = useCreateTweet(state => state)

  const { onChange, ...rest } = registerField

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    onChange(e)
    trigger('content')
    setFormCreateTweet({ ...initialForm, [name]: value })
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
      value={initialForm.content}
      {...rest}
      onChange={handleOnChange}
    />
  )
}
