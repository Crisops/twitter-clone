import { ChangeEvent } from 'react'
import { EditableProfileFields, useFormEditProfile } from '@/hooks/useFormEditProfile'
import { useEditProfileContext } from '@/hooks/useEditProfileContext'
import { Input } from '@heroui/input'

interface InputEditProfileProps {
    label: string
    defaultValue: string
    registerName: keyof EditableProfileFields
}

export default function InputEdit ({ label, defaultValue, registerName }: InputEditProfileProps) {
  const { initialForm, handleOnChangeData } = useEditProfileContext()
  const { registerField, trigger, errors } = useFormEditProfile()
  const { name, ref, onChange, ...rest } = registerField(registerName)

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleOnChangeData(e)
    onChange(e)
    trigger(name)
  }
  return (
    <>
      <Input
        ref={ref}
        name={name}
        onChange={handleOnChange}
        radius='sm'
        variant='bordered'
        label={label}
        defaultValue={defaultValue}
        value={initialForm[registerName] ?? ''}
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
