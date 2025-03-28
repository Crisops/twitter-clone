import { ButtonGoogle } from '@/components/shared/ButtonGoogle'

const Form = () => {
  return (
    <form className='max-w-72 flex flex-col gap-10'>
      <h1 className='text-slate-100 font-extrabold text-2xl md:text-3xl'>Únete Hoy</h1>
      <ButtonGoogle />
    </form>
  )
}

export default Form
