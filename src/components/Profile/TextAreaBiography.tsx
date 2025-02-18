import { ChangeEvent } from 'react'
import { Tables } from '@/types/database.types'
import { useFormEditProfile } from '@/hooks/useFormEditProfile'
import { useEditProfileContext } from '@/hooks/useEditProfileContext'
import { Textarea } from '@heroui/input'

interface TextAreaBiographyProps {
  biography: Tables<'users'>['biography']
}

export default function TextAreaBiography ({ biography }: TextAreaBiographyProps) {
  const { registerField, trigger, errors } = useFormEditProfile()
  const { initialForm, handleOnChangeData } = useEditProfileContext()
  const { onChange, ...rest } = registerField('biography')

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e)
    trigger('biography')
    handleOnChangeData(e)
  }

  return (
    <Textarea
      onChange={handleOnChange}
      isInvalid={!!errors.biography}
      errorMessage={errors.biography?.message}
      radius='sm' minRows={2} maxRows={2} variant='bordered' label='Biografía' defaultValue={biography ?? ''}
      value={initialForm.biography ?? ''}
      classNames={{
        inputWrapper: ['border-small border-zinc-700 group-data-[focus=true]:border-medium group-data-[focus=true]:border-sky-500 min-h-[82px]'],
        label: ['text-default-400 group-data-[focus-within=true]:text-sky-500']
      }}
      {...rest}
    />
  )
}
