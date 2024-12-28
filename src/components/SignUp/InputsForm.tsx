import { useEffect, useId } from 'react'
import { InputForm } from '@/components/shared/InputForm'
import { useSignUp } from '@/hooks/useStore'
import { useFormAuthSignUp } from '@/hooks/useFormAuthSignUp'

export const InputsForm = () => {
  const { registerField, watch, errors } = useFormAuthSignUp('onChange')

  const idNameUser = useId()
  const idEmailUser = useId()

  const { initialForm, setFormSignUp } = useSignUp(state => state)

  useEffect(() => {
    const { unsubscribe } = watch(({ fullName, email }) => {
      if (fullName && email) setFormSignUp({ ...initialForm, fullName, email })
    })

    return () => unsubscribe()
  }, [watch, initialForm, setFormSignUp])

  return (
    <>
      <InputForm
        id={idNameUser}
        label='Nombre'
        type='text'
        handleInputRegister={{ ...registerField('fullName') }}
        errorMessage={errors.fullName?.message}
        valueInput={watch('fullName')}
      />
      <InputForm
        id={idEmailUser}
        label='Correo electrónico'
        type='email'
        handleInputRegister={{ ...registerField('email') }}
        errorMessage={errors.email?.message}
        valueInput={watch('email')}
      />
    </>
  )
}
