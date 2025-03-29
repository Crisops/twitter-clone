import { ChangeEvent, useState } from 'react'
import { FormSignUp } from '@/types/store'
import { IconEye, IconEyeOff } from '@tabler/icons-react'
import { signup } from '@/actions/actions'
import { useAuth } from '@/hooks/useStore'
import { useFormAuth } from '@/hooks/useFormAuth'
import { FormAuth } from '@/lib/form-auth'
import Input from '@/components/shared/Input'
import Button from '@/components/shared/Button'

export const Form = () => {
  const { initialForm } = useAuth(state => state)
  const { registerField, errors, trigger, handleSubmit } = useFormAuth<FormSignUp>({ initialForm })
  const [viewPassword, setViewPassword] = useState<boolean>(false)

  const { onChange: onChangeUsername, ...restUsername } = registerField('username')
  const { onChange: onChangePassword, ...restPassword } = registerField('password')

  const handleViewPassword = () => {
    setViewPassword(prev => !prev)
  }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangePassword(e)
    onChangeUsername(e)
    trigger(e.target.name as keyof FormAuth)
  }

  const handleOnSubmit = handleSubmit(async (data) => {
    console.log(data)
    await signup({ provider: 'email', data })
  })

  return (
    <div className='flex items-center flex-col w-full'>
      <div className='flex flex-col max-w-72 sm:max-w-md lg:max-w-lg w-full h-full'>
        <div className='my-7'>
          <h1 className='text-2xl md:text-3xl text-white font-semibold'>Crea tu cuenta</h1>
        </div>
        <form onSubmit={handleOnSubmit} className='flex flex-col gap-y-6 w-full h-full'>
          <Input
            isReadOnly
            classNames={{ inputWrapper: ['bg-[#202327]/50 ring-1 ring-[#202327] data-[hover=true]:bg-[#202327]/50'], label: ['text-zinc-500'] }} radius='none'
            label='Correo electrónico'
            defaultValue={initialForm.email}
            {...registerField('email')}
          />
          <Input
            onChange={handleOnChange}
            isInvalid={!!errors.username}
            errorMessage={errors.username?.message}
            classNames={{ inputWrapper: [`bg-transparent ring-1 data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent  !bg-danger-transparent data-[hover=true]:!bg-danger-transparent group-data-[focus=true]:!bg-danger-transparent ${errors.username ? 'ring-[#f31260] group-data-[focus=true]:ring-[#f31260]' : 'ring-zinc-500 group-data-[focus=true]:ring-sky-500'}`], label: ['group-data-[filled-within=true]:text-sky-500 '] }} radius='none'
            label='Nombre de usuario'
            {...restUsername}
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
            {...restPassword}
          />
          <Button type='submit' className='bg-white text-black font-medium w-full text-medium h-12' variant='solid' radius='full'>Crear cuenta</Button>
        </form>
      </div>
    </div>
  )
}
