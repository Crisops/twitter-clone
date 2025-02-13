import { FormEvent, useId, useState } from 'react'
import { useAuth } from '@/hooks/useStore'
import { initialFormAuth } from '@/config/fields-form'
import { IconEye, IconEyeOff } from '@tabler/icons-react'
import { InputForm } from '@/components/shared/InputForm'
import Link from 'next/link'

export const FormLogin = () => {
  const idEmail = useId()
  const idPassword = useId()
  const [view, setView] = useState<boolean>(false)

  const { initialForm, setFormAuth } = useAuth(state => state)

  const handleViewPassword = () => {
    setView(!view)
  }

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(initialForm)
    setFormAuth(initialFormAuth)
  }

  return (
    <div className='flex items-center flex-col w-full'>
      <div className='flex flex-col max-w-72 sm:max-w-md lg:max-w-lg w-full h-full'>
        <div className='my-7'>
          <h1 className='text-2xl md:text-3xl text-white font-semibold'>Introduce tu contraseña</h1>
        </div>
        <form onSubmit={handleOnSubmit} className='flex flex-col w-full h-full'>
          <InputForm
            id={idEmail}
            registerName='email'
            label='Correo electrónico'
            defaultValue={initialForm.email?.toLocaleLowerCase()}
            type='email'
            disabled
          />
          <InputForm
            id={idPassword}
            type={view ? 'text' : 'password'}
            registerName='password'
            label='Contraseña'
            IconSvg={view ? <IconEyeOff color='white' size={25} /> : <IconEye color='white' size={25} />}
            handleViewPassword={handleViewPassword}
          />
          <div className='flex flex-col mb-10 h-full justify-end'>
            <div>
              <button type='submit' className='text-black text-base w-full rounded-full font-bold bg-white p-2 hover:bg-white'>Iniciar sesión</button>
            </div>
            <div className='mt-5'>
              <p className='text-base text-zinc-500'>¿No tienes una cuenta? <Link href='/signup' className='text-sky-500 hover:underline'>Regístrate</Link></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
