import { IconEye, IconEyeOff } from '@tabler/icons-react'
import Link from 'next/link'
import Input from '@/components/shared/Input'
import { useFormAuth } from '@/hooks/useFormAuth'
import { type FormLogin as FormLoginType } from '@/types/store'
import { ChangeEvent, useState } from 'react'
import Button from '../shared/Button'

export const FormLogin = () => {
  const { registerField, errors, trigger, handleSubmit } = useFormAuth<FormLoginType>()
  const [viewPassword, setViewPassword] = useState<boolean>(false)

  const { onChange, ...rest } = registerField('password')

  const handleViewPassword = () => {
    setViewPassword(prev => !prev)
  }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e)
    trigger('password')
  }

  const handleOnSubmit = handleSubmit(data => {
    console.log('Formulario enviado')
    console.log(data)
  })

  return (
    <div className='flex items-center flex-col w-full'>
      <div className='flex flex-col max-w-72 sm:max-w-md lg:max-w-lg w-full h-full'>
        <div className='my-7'>
          <h1 className='text-2xl md:text-3xl text-white font-semibold'>Introduce tu contraseña</h1>
        </div>
        <form onSubmit={handleOnSubmit} className='flex flex-col gap-y-6 w-full h-full'>
          <Input
            isReadOnly
            classNames={{ inputWrapper: ['bg-[#202327]/50 ring-1 ring-[#202327] data-[hover=true]:bg-[#202327]/50'], label: ['text-zinc-500'] }} radius='none'
            label='Correo electrónico'
            defaultValue='crialeperez1835@gmail.com'
            {...registerField('email')}
          />
          <Input
            type={viewPassword ? 'text' : 'password'}
            onChange={handleOnChange}
            endContent={
              <Button onPress={handleViewPassword} className='w-fit h-auto bg-transparent data-[pressed=true]:scale-100' isIconOnly>
                {viewPassword ? <IconEyeOff color='white' size={25} /> : <IconEye color='white' size={25} />}
              </Button>
            }
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message}
            classNames={{ inputWrapper: [`bg-transparent ring-1 data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent  !bg-danger-transparent data-[hover=true]:!bg-danger-transparent group-data-[focus=true]:!bg-danger-transparent ${errors.password ? 'ring-[#f31260] group-data-[focus=true]:ring-[#f31260]' : 'ring-zinc-500 group-data-[focus=true]:ring-sky-500'}`], label: ['group-data-[filled-within=true]:text-sky-500 '] }} radius='none'
            label='Contraseña'
            {...rest}
          />
          <Button type='submit' className='bg-white text-black font-medium w-full text-medium' variant='solid' radius='full'>Iniciar sesión</Button>
        </form>
        <div className='mt-5 w-full'>
          <p className='text-base text-zinc-500'>¿No tienes una cuenta? <Link href='/signup' className='text-sky-500 hover:underline'>Regístrate</Link></p>
        </div>
      </div>
    </div>
  )
}
