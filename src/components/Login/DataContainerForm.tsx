'use client'

import { ChangeEvent } from 'react'
import { FormLogin } from '@/types/store'
import { useAuth } from '@/hooks/useStore'
import { useFormAuth } from '@/hooks/useFormAuth'
import Button from '@/components/shared/Button'
import { ButtonGoogle } from '@/components/shared/ButtonGoogle'
import Input from '@/components/shared/Input'
import Link from 'next/link'

interface DataContainerFormProps {
    handleNextConfirmData: () => void
}

export const DataContainerForm = ({ handleNextConfirmData }: DataContainerFormProps) => {
  const { initialForm } = useAuth(state => state)
  const { registerField, errors, trigger, handleSubmit } = useFormAuth<FormLogin>({ initialForm })

  const { onChange, ...rest } = registerField('email')

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e)
    trigger('email')
  }

  const handleOnSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <div className='flex items-center flex-col w-full'>
      <div className='w-full max-w-72'>
        <div className='my-6'>
          <h1 className='text-3xl text-white font-bold'>Inicia sesión en X</h1>
        </div>
        <form onSubmit={handleOnSubmit} className='flex flex-col w-full mb-6 gap-3'>
          <ButtonGoogle />
          <div className='flex items-center gap-3'>
            <div className='w-full h-px bg-zinc-700' />
            <div className='text-white text-xs'>O</div>
            <div className='w-full h-px bg-zinc-700' />
          </div>
          <Input
            type='email'
            autoComplete='email'
            onChange={handleOnChange}
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message}
            classNames={{ inputWrapper: [`bg-transparent ring-1 data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent !bg-danger-transparent data-[hover=true]:!bg-danger-transparent group-data-[focus=true]:!bg-danger-transparent ${errors.email ? 'ring-[#f31260] group-data-[focus=true]:ring-[#f31260]' : 'ring-zinc-500 group-data-[focus=true]:ring-sky-500'}`], label: ['group-data-[filled-within=true]:text-sky-500 '] }} radius='none'
            label='Correo electrónico'
            {...rest}
          />
          <Button type='submit' className='bg-white text-zinc-700 w-full font-medium' variant='solid' radius='full' size='md'>
            Siguiente
          </Button>
        </form>
        <p className='text-base text-zinc-500'>¿No tienes una cuenta? <Link href='/signup' className='text-sky-500 hover:underline'>Regístrate</Link></p>
      </div>
    </div>
  )
}
