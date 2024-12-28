import { validationRulesSignUp } from '@/lib/form-auth'
import { type FormSignUp } from '@/types/store'
import { type Mode, useForm } from 'react-hook-form'

export const useFormAuthSignUp = (mode?: Mode) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormSignUp>({ mode })

  const registerField = (name: keyof FormSignUp) => register(name, validationRulesSignUp[name])

  return { registerField, handleSubmit, watch, errors }
}
