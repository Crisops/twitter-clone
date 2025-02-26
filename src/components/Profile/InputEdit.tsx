import { ChangeEvent } from 'react'
import { FieldErrors, UseFormRegisterReturn, UseFormTrigger } from 'react-hook-form'
import { FormEditProfileUser } from '@/types/store'
import { Input } from '@heroui/input'

interface InputEditProfileProps {
    label: string
    registerName: keyof FormEditProfileUser
    handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void
    errors: FieldErrors<FormEditProfileUser>
    registerField: (name: keyof FormEditProfileUser) => UseFormRegisterReturn<keyof FormEditProfileUser>
    trigger: UseFormTrigger<FormEditProfileUser>
}

export default function InputEdit ({ label, registerName, trigger, registerField, errors, handleOnChange }: InputEditProfileProps) {
  const { onChange, ...rest } = registerField(registerName)

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e)
    trigger(registerName)
    handleOnChange(e)
  }

  return (
    <>
      <Input
        onChange={handleChangeInput}
        radius='sm'
        variant='bordered'
        label={label}
        isInvalid={!!errors[registerName]}
        errorMessage={errors[registerName]?.message}
        classNames={{
          inputWrapper: ['border-small border-zinc-700 group-data-[focus=true]:border-medium group-data-[focus=true]:border-sky-500'],
          label: ['text-default-400 group-data-[focus-within=true]:text-sky-500']
        }}
        {...rest}
      />
    </>

  )
}
