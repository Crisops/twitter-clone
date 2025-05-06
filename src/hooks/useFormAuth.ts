import { DefaultValues, Path, useForm } from 'react-hook-form'
import { validationRules } from '@/lib/form-auth'

interface useFormAuthProps<T> {
  initialForm: DefaultValues<T>
}

export const useFormAuth = <T extends Partial<Record<keyof typeof validationRules, any>>>({ initialForm }: useFormAuthProps<T>) => {
  const { register, handleSubmit, trigger, setError, formState: { errors, isSubmitting, isSubmitted } } = useForm<T>({ defaultValues: initialForm })

  const registerField = (name: Path<T>) => {
    const rules = validationRules as Partial<Record<Path<T>, any>>
    return register(name, rules[name])
  }
  return { registerField, handleSubmit, trigger, setError, errors, isSubmitting, isSubmitted }
}
