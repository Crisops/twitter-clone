import { ChangeEvent } from 'react'
import { Path, UseFormRegisterReturn } from 'react-hook-form'
import { FormSignUp } from '@/types/store'
import { Birthday } from '@/lib/data-date'
import { Select, SelectItem, SelectProps } from '@heroui/select'

interface SelectedBirthdayProps extends Omit<SelectProps, 'children'>{
  handleOnChange: (e: ChangeEvent<HTMLSelectElement>) => void
  registerField: UseFormRegisterReturn<Path<FormSignUp>>
  date: Birthday[]
 }

export const SelectedBirthday = ({ date, registerField, handleOnChange, ...rest }: SelectedBirthdayProps) => {
  return (
    <Select {...registerField} {...rest} radius='sm' variant='bordered' size='md' onChange={handleOnChange}>
      {date.map(el => <SelectItem key={el.key}>{el.label}</SelectItem>)}
    </Select>
  )
}
