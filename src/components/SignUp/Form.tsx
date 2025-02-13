import { FormEvent, useId, useState } from 'react'
import { IconEye, IconEyeOff } from '@tabler/icons-react'
import { useAuth } from '@/hooks/useStore'
import { InputForm } from '@/components/shared/InputForm'

export const Form = () => {
  const idUserName = useId()
  const idPassword = useId()
  const { initialForm } = useAuth(state => state)

  const [view, setView] = useState<boolean>(false)

  const handleViewPassword = () => {
    setView(!view)
  }

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(initialForm)
  }

  return (
    <div className='flex items-center flex-col w-full h-[calc(100%-4rem)]'>
      <div className='flex flex-col max-w-72 sm:max-w-md w-full h-full'>
        <div className='my-7'>
          <h1 className='text-3xl text-white font-semibold'>Crea tu cuenta</h1>
        </div>
        <form onSubmit={handleOnSubmit} className='flex flex-col w-full h-full'>
          <InputForm
            id={idUserName}
            label='Nombre de usuario'
            type='text'
            registerName='username'
          />
          <InputForm
            id={idPassword}
            registerName='password'
            type={view ? 'text' : 'password'}
            label='Contraseña'
            IconSvg={view ? <IconEyeOff color='white' size={25} /> : <IconEye color='white' size={25} />}
            handleViewPassword={handleViewPassword}
          />
          <div className='flex mb-10 h-full'>
            <div className='flex-grow self-end'>
              <button type='submit' className='text-black text-lg w-full rounded-full font-medium bg-white p-3 hover:bg-white/90'>Crear cuenta</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
