import { ChangeEvent } from 'react'
import { FormSignUp } from '@/types/store'
import { useAuth } from '@/hooks/useStore'
import { useFormAuth } from '@/hooks/useFormAuth'
import { months, days, years } from '@/lib/data-date'
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import { SelectedBirthday } from '@/components/SignUp/SelectedBirthDay'

interface DataCredentialsFormProps {
    handleNextData: () => void
}

export const DataCredentialsForm = ({ handleNextData }: DataCredentialsFormProps) => {
  const { initialForm, setFormAuth } = useAuth(state => state)
  const { registerField, trigger, errors, handleSubmit } = useFormAuth<FormSignUp>({ initialForm })

  const { onChange: onChangeFullName, ...restFullName } = registerField('fullName')
  const { onChange: onChangeEmail, ...restEmail } = registerField('email')

  const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onChangeFullName(e)
    onChangeEmail(e)
    trigger(e.target.name as keyof FormSignUp)
  }

  const handleOnSubmit = handleSubmit(data => {
    console.log(data)
    setFormAuth(data)
    handleNextData()
  })

  return (
    <div className='flex items-center flex-col w-full h-[calc(100%-3.5rem)]'>
      <div className='flex flex-col max-w-72 sm:max-w-md w-full h-full'>
        <div className='my-7'>
          <h1 className='text-3xl text-white font-semibold'>Crea tu cuenta</h1>
        </div>
        <form onSubmit={handleOnSubmit} className='flex flex-col w-full h-full gap-6'>
          <Input
            onChange={handleOnChange}
            isInvalid={!!errors.fullName}
            errorMessage={errors.fullName?.message}
            classNames={{ inputWrapper: [`bg-transparent ring-1 data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent !bg-danger-transparent data-[hover=true]:!bg-danger-transparent group-data-[focus=true]:!bg-danger-transparent ${errors.fullName ? 'ring-[#f31260] group-data-[focus=true]:ring-[#f31260]' : 'ring-zinc-500 group-data-[focus=true]:ring-sky-500'}`], label: ['group-data-[filled-within=true]:text-sky-500 '] }} radius='none'
            label='Nombre'
            {...restFullName}
          />
          <Input
            onChange={handleOnChange}
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message}
            classNames={{ inputWrapper: [`bg-transparent ring-1 data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent !bg-danger-transparent data-[hover=true]:!bg-danger-transparent group-data-[focus=true]:!bg-danger-transparent ${errors.email ? 'ring-[#f31260] group-data-[focus=true]:ring-[#f31260]' : 'ring-zinc-500 group-data-[focus=true]:ring-sky-500'}`], label: ['group-data-[filled-within=true]:text-sky-500 '] }} radius='none'
            label='Correo electrónico'
            {...restEmail}
          />
          <div>
            <h3 className='text-white text-base font-medium'>Fecha de nacimiento</h3>
            <p className='text-zinc-500 text-sm'>Esta información no será pública. Confirma tu propia edad, incluso si esta cuenta es para una empresa, una mascota u otra cosa.</p>
          </div>
          <div className='flex gap-4 mt-5'>
            <SelectedBirthday label='Mes' date={months} handleOnChange={handleOnChange} registerField={registerField('birthday.month')} />
            <SelectedBirthday label='Día' date={days} handleOnChange={handleOnChange} registerField={registerField('birthday.day')} />
            <SelectedBirthday label='Año' date={years} handleOnChange={handleOnChange} registerField={registerField('birthday.year')} />
          </div>
          <Button type='submit' className='bg-white font-medium w-full text-black h-12' variant='solid' radius='full'>Siguiente</Button>
        </form>
      </div>
    </div>
  )
}
