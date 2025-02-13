import { useId } from 'react'
import { ButtonGoogle } from '@/components/shared/ButtonGoogle'
import { InputForm } from '@/components/shared/InputForm'
import Link from 'next/link'

interface DataContainerFormProps {
    handleNextConfirmData: () => void
}

export const DataContainerForm = ({ handleNextConfirmData }: DataContainerFormProps) => {
  const idEmail = useId()

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
          registerName='email'
          label='Correo electrónico'
        />
        <div className='mb-6'>
          <button onClick={handleNextConfirmData} className=' text-black text-center w-full p-2 font-medium text-base rounded-full bg-white'>Siguiente</button>
        </div>
        <div>
          <p className='text-base text-zinc-500'>¿No tienes una cuenta? <Link href='/signup' className='text-sky-500 hover:underline'>Regístrate</Link></p>
        </div>
      </div>
    </div>
  )
}
