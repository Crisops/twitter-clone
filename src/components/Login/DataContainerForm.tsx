import { useId } from 'react'
import { ButtonGoogle } from '@/components/shared/ButtonGoogle'
import { InputForm } from '@/components/shared/InputForm'
import Link from 'next/link'
import Button from '@/components/shared/Button'

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
          <ButtonGoogle />
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
        </form>
        <Button onPress={handleNextConfirmData} className='bg-white text-zinc-700 w-full font-medium' variant='solid' radius='full' size='md'>
          Siguiente
        </Button>
        <div className='mt-6'>
          <p className='text-base text-zinc-500'>¿No tienes una cuenta? <Link href='/signup' className='text-sky-500 hover:underline'>Regístrate</Link></p>
        </div>
      </div>
    </div>
  )
}
