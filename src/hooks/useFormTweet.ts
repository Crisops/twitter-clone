import { useForm } from 'react-hook-form'
import { type FormCreateTweet } from '@/types/store'
import { validationRulesTweet } from '@/lib/form-tweet'
import { initialCreateTweetForm } from '@/config/fields-form'
import { Tables } from '@/types/database.types'

export const useFormTweet = ({ idSession }: {idSession: Tables<'users'>['id']}) => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, trigger, getValues, setValue, reset } = useForm<FormCreateTweet>({
    defaultValues: { ...initialCreateTweetForm, user_id: idSession }
  })

  const registerField = (name: keyof FormCreateTweet) => register(name, validationRulesTweet[name])

  return {
    registerField,
    handleSubmit,
    trigger,
    getValues,
    setValue,
    reset,
    errors,
    isSubmitting
  }
}
