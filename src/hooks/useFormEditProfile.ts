import { useForm } from 'react-hook-form'
import { FormEditProfileUser } from '@/types/store'
import { validationRulesEditProfile } from '@/lib/form-edit-profile'
import { initialFormEditProfile } from '@/config/fields-form'

export const useFormEditProfile = (values?: FormEditProfileUser) => {
  const { register, handleSubmit, trigger, formState: { errors }, getValues, setValue } = useForm<FormEditProfileUser>({ defaultValues: initialFormEditProfile, values })

  const registerField = (name: keyof FormEditProfileUser) => register(name, validationRulesEditProfile[name])

  return { registerField, handleSubmit, trigger, getValues, setValue, errors }
}
