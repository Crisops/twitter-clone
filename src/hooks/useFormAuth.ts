import { type Mode, useForm } from 'react-hook-form'
import { FormAuth, validationRules } from '@/lib/form-auth'

export const useFormAuth = (mode?: Mode) => {
  const { register, handleSubmit, control, trigger, formState: { errors } } = useForm<FormAuth>({ mode })

  const registerField = (name: keyof FormAuth) => register(name, validationRules[name])

  return { registerField, handleSubmit, trigger, control, errors }
}
