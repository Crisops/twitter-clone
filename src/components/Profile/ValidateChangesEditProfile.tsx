import { useEditProfileContext } from '@/hooks/useEditProfileContext'
import { Button } from '@heroui/button'

export default function ValidateChangesEditProfile () {
  const { dispatch } = useEditProfileContext()

  const handleDiscardChanges = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  const handleCancel = () => {
    dispatch({ type: 'OPEN_MODAL_EDIT_PROFILE' })
  }

  return (
    <div className='w-full h-full px-7 pb-7'>
      <div className='flex flex-col gap-5'>
        <div className='flex-1 gap-4'>
          <div>
            <h3 className='text-gray-50 font-semibold text-2xl'>¿Quieres descartar los cambios?</h3>
          </div>
          <div>
            <p className='text-zinc-500'>Esta acción no se puede revertir, y perderás tus cambios.</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <Button onPress={handleDiscardChanges} radius='full' variant='solid' className='w-full h-11 bg-red-600 text-white font-medium'>Descartar</Button>
          <Button onPress={handleCancel} radius='full' variant='bordered' className='w-full h-11 bg-transparent text-foreground border-1 border-slate-500 font-medium'>Cancelar</Button>
        </div>
      </div>
    </div>
  )
}
