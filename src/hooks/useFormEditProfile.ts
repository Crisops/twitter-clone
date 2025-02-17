import { useForm } from 'react-hook-form'
import { FormEditProfile } from '@/types/store'
import { validationRulesEditProfile } from '@/lib/form-edit-profile'

export type EditableProfileFields = Omit<FormEditProfile, 'avatar' | 'bannerUrl'>;

export const useFormEditProfile = () => {
  const { register, handleSubmit, trigger, formState: { errors } } = useForm<EditableProfileFields>()

  const registerField = (name: keyof EditableProfileFields) => register(name, validationRulesEditProfile[name])

  return { registerField, handleSubmit, trigger, errors }
}
