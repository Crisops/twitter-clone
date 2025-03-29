import { Path, useForm } from 'react-hook-form'
import { validationRules } from '@/lib/form-auth'

export const useFormAuth = <T extends Partial<Record<keyof typeof validationRules, any>>>() => {
  const { register, handleSubmit, trigger, formState: { errors } } = useForm<T>()

  const registerField = (name: Path<T>) => {
    const rules = validationRules as Partial<Record<Path<T>, any>>
    return register(name, rules[name])
  }
  return { registerField, handleSubmit, trigger, errors }
}
