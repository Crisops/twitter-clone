import { useReducerOptionsPost } from '@/hooks/useReducerOptionsPost'
import { Tables } from '@/types/database.types'
import { Button } from '@heroui/react'

interface ConfirmDeletePostProps {
  tweetId: Tables<'tweets'>['id']
  userId: Tables<'tweets'>['user_id']
}

export default function ConfirmDeletePost ({ tweetId, userId }: ConfirmDeletePostProps) {
  const { handleDeletePost, dispatch } = useReducerOptionsPost()

  const handleOnPress = () => {
    handleDeletePost({ id: tweetId, user_id: userId })
  }

  const handleCloseModal = () => {
    dispatch({ type: 'CLOSE' })
  }

  return (
    <div className='w-full h-full px-7 pb-7'>
      <div className='flex flex-col gap-5'>
        <div className='flex-1 gap-4'>
          <div>
            <h3 className='text-gray-50 font-semibold text-2xl'>¿Deseas eliminar post?</h3>
          </div>
          <div>
            <p className='text-zinc-500'>Esta acción no se puede revertir, y se eliminará de tu perfil, de la cronología de las cuentas que te sigan y de los resultados de búsqueda. </p>
          </div>
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <Button onPress={handleOnPress} radius='full' variant='solid' className='w-full h-11 bg-red-600 text-white font-medium'>Eliminar</Button>
          <Button onPress={handleCloseModal} radius='full' variant='bordered' className='w-full h-11 bg-transparent text-foreground border-1 border-slate-500 font-medium'>Cancelar</Button>
        </div>
      </div>
    </div>
  )
}
