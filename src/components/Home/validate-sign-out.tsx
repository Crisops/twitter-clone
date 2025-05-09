import Button from '@/components/shared/Button'

interface ValidateSignOutProps {
  handleSignOut: () => void
  handleCloseModal: () => void
}

export default function ValidateSignOut ({ handleSignOut, handleCloseModal }: ValidateSignOutProps) {
  return (
    <div className='w-full h-full px-7 pb-7'>
      <div className='flex flex-col gap-5'>
        <div className='flex-1 gap-4'>
          <div>
            <h3 className='text-gray-50 font-semibold text-2xl'>¿Deseas cerrar sesión en X Clone?</h3>
          </div>
          <div>
            <p className='text-zinc-500'>Puedes volver a iniciar sesión en cualquier momento.</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <Button onPress={handleSignOut} radius='full' variant='solid' className='w-full h-11 bg-gray-50 text-black font-medium'>Cerrar sesión</Button>
          <Button onPress={handleCloseModal} radius='full' variant='bordered' className='w-full h-11 bg-transparent text-foreground border-1 border-slate-500 font-medium'>Cancelar</Button>
        </div>
      </div>
    </div>
  )
}
