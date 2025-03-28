import Link from 'next/link'
import Form from '@/components/ChooseAccount/Form'
import Button from '@/components/shared/Button'

const SectionForm = () => {
  return (
    <section className='relative w-full h-full sm:h-fit xl:pl-20'>
      <div className='w-full h-full flex flex-col justify-center'>
        <div className='max-w-md mb-14 lg:max-w-2xl'>
          <span className='font-bold text-4xl md:text-6xl lg:text-7xl text-slate-100'>Lo que está pasando ahora</span>
        </div>
        <Form />
        <div className='max-w-72 mt-1'>
          <div className='flex items-center gap-2 mb-1'>
            <div className='w-full h-px bg-zinc-700' />
            <div className='text-white text-xs'>O</div>
            <div className='w-full h-px bg-zinc-700' />
          </div>
          <Button as={Link} href='/signup' className='bg-sky-500 text-white text-small font-medium w-full h-9' radius='full' variant='solid'>
            Crear Cuenta
          </Button>
          <div className='mt-2 mb-12'>
            <p className='text-zinc-500 text-xs'>Al registrarte, aceptas los <a href='#' className='text-sky-500 hover:underline'>Términos de servicio</a> y la <a href='#' className='text-sky-500 hover:underline'>Política de privacidad</a>, incluida la política de <a href='#' className='text-sky-500 hover:underline'>Uso de Cookies.</a>
            </p>
          </div>
          <div className='space-y-6'>
            <span className='text-white font-medium text-lg'>¿Ya tienes una cuenta?</span>
            <Button as={Link} href='/login' className='border border-zinc-500 w-full data-[hover=true]:bg-sky-800/20 font-bold text-sky-500' variant='light' radius='full'>Iniciar sesión</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionForm
