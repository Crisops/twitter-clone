import { validationRulesTweet } from '@/lib/form-tweet'
import { type FormCreateTweet } from '@/types/store'
import { type Mode, useForm } from 'react-hook-form'

export const useFormTweet = (mode?: Mode) => {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<FormCreateTweet>({ mode })

  const registerField = (name: keyof FormCreateTweet) => register(name, validationRulesTweet[name])

  return {
    registerField,
    handleSubmit,
    watch,
    errors,
    isSubmitting
  }
}
