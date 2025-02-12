import { ModalDeletePostContext } from '@/context/ModalDeletePostContext'
import { useContext } from 'react'

export const useReducerOptionsPost = () => {
  const context = useContext(ModalDeletePostContext)
  if (!context) throw new Error('useReducerOptionsPost debe usarse dentro de un ModalDeletePostProvider')

  return context
}
