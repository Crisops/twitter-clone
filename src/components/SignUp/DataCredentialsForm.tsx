import { SelectedBirthday } from './SelectedBirthDay'
import { months, days, years } from '@/lib/data-date'
import { InputForm } from '@/components/shared/InputForm'
import { useId } from 'react'

interface DataCredentialsFormProps {
    handleNextData: () => void
}

export const DataCredentialsForm = ({ handleNextData }: DataCredentialsFormProps) => {
  const idNameUser = useId()
  const idEmailUser = useId()

  return (
    <div className='flex items-center flex-col w-full h-[calc(100%-3.5rem)]'>
      <div className='flex flex-col max-w-72 sm:max-w-md w-full h-full'>
        <div className='my-7'>
          <h1 className='text-3xl text-white font-semibold'>Crea tu cuenta</h1>
        </div>
        <section className='flex flex-col w-full h-full'>
          <InputForm
            id={idNameUser}
            label='Nombre'
            type='text'
            registerName='fullName'
          />
          <InputForm
            id={idEmailUser}
            registerName='email'
            label='Correo electrónico'
            type='email'
          />
          <div>
            <h3 className='text-white text-base font-medium'>Fecha de nacimiento</h3>
            <p className='text-zinc-500 text-sm'>Esta información no será pública. Confirma tu propia edad, incluso si esta cuenta es para una empresa, una mascota u otra cosa.</p>
          </div>
          <div className='flex gap-4 mt-5'>
            <SelectedBirthday label='Mes' name='month' date={months} />
            <SelectedBirthday label='Día' name='day' date={days} />
            <SelectedBirthday label='Año' name='year' date={years} />
          </div>
        </section>
        <div className='mb-10'>
          <div>
            <button onClick={handleNextData} type='button' className='text-black bg-white text-lg w-full rounded-full font-medium p-3'>Siguiente</button>
          </div>
        </div>
      </div>
    </div>
  )
}
