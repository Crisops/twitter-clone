import { ChangeEvent } from 'react'
import { Textarea } from '@heroui/input'
import { FieldErrors, UseFormRegisterReturn, UseFormTrigger } from 'react-hook-form'
import { FormEditProfileUser } from '@/types/store'

interface TextAreaBiographyProps {
    registerName: keyof FormEditProfileUser
    errors: FieldErrors<FormEditProfileUser>
    handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void
    registerField: (name: keyof FormEditProfileUser) => UseFormRegisterReturn<keyof FormEditProfileUser>
    trigger: UseFormTrigger<FormEditProfileUser>
}

export default function TextAreaBiography ({ registerName, errors, registerField, trigger, handleOnChange }: TextAreaBiographyProps) {
  const { onChange, ...rest } = registerField(registerName)

  const handleOnChangeBiography = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e)
    trigger('biography')
    handleOnChange(e)
  }

  return (
    <Textarea
      onChange={handleOnChangeBiography}
      isInvalid={!!errors.biography}
      errorMessage={errors.biography?.message}
      radius='sm' minRows={2} maxRows={2} variant='bordered' label='Biografía'
      classNames={{
        inputWrapper: ['border-small border-zinc-700 group-data-[focus=true]:border-medium group-data-[focus=true]:border-sky-500 min-h-[82px]'],
        label: ['text-default-400 group-data-[focus-within=true]:text-sky-500']
      }}
      {...rest}
    />
  )
}
