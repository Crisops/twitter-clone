import { useForm } from 'react-hook-form'
import { type FormCreateTweet } from '@/types/store'
import { validationRulesTweet } from '@/lib/form-tweet'

export const useFormTweet = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, trigger } = useForm<FormCreateTweet>()

  const registerField = (name: keyof FormCreateTweet) => register(name, validationRulesTweet[name])

  return {
    registerField,
    handleSubmit,
    trigger,
    errors,
    isSubmitting
  }
}
