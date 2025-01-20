import { validationRulesTweet } from '@/lib/form-tweet'
import { type FormCreateTweet } from '@/types/store'
import { useForm } from 'react-hook-form'

export const useFormTweet = () => {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting }, trigger } = useForm<FormCreateTweet>()

  const registerField = (name: keyof FormCreateTweet) => register(name, validationRulesTweet[name])

  return {
    registerField,
    handleSubmit,
    watch,
    trigger,
    errors,
    isSubmitting
  }
}
