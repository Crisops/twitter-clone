'use client'

import Link from 'next/link'
import { ButtonGoogle } from '../shared/ButtonGoogle'
import { InputForm } from '@/components/shared/InputForm'
import { useFormAuthLogin } from '@/hooks/useFormAuthLogin'
import { useLogin } from '@/hooks/useStore'
import { useEffect, useId } from 'react'

interface DataContainerFormProps {
    handleNextConfirmData: () => void
}

export const DataContainerForm = ({ handleNextConfirmData }: DataContainerFormProps) => {
  const idEmail = useId()
  const { registerField, watch, errors } = useFormAuthLogin('onChange')
  const { initialForm, setFormLogin } = useLogin(state => state)

  const email = watch('email')

  useEffect(() => {
    const { unsubscribe } = watch(({ email }) => {
      if (email) setFormLogin({ ...initialForm, email })
    })

    return () => unsubscribe()
  }, [watch, initialForm, setFormLogin])

  return (
    <div className='flex items-center flex-col w-full'>
      <div className='w-full max-w-72'>
        <div className='my-6'>
          <h1 className='text-3xl text-white font-bold'>Inicia sesión en X</h1>
        </div>
        <form className='flex flex-col w-full'>
          <ButtonGoogle textContent='Iniciar sesión con Google' />
        </form>
        <div className='flex items-center gap-3 my-3'>
          <div className='w-full h-px bg-zinc-700' />
          <div className='text-white text-xs'>O</div>
          <div className='w-full h-px bg-zinc-700' />
        </div>
        <InputForm
          id={idEmail}
          type='email'
          label='Correo electrónico'
          handleInputRegister={{ ...registerField('email') }}
          errorMessage={errors.email?.message}
          valueInput={email}
        />
        <div className='mb-6'>
          <button onClick={handleNextConfirmData} className={`${(errors.email?.message || !email) && 'bg-white/40 pointer-events-none'} text-black text-center w-full p-2 font-medium text-base rounded-full bg-white`}>Siguiente</button>
        </div>
        <div>
          <p className='text-base text-zinc-500'>¿No tienes una cuenta? <Link href='/signup' className='text-sky-500 hover:underline'>Regístrate</Link></p>
        </div>
      </div>
    </div>
  )
}
