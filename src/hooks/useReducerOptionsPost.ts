import { useContext } from 'react'
import { ModalDeletePostContext } from '@/context/ModalDeletePostContext'

export const useReducerOptionsPost = () => {
  const context = useContext(ModalDeletePostContext)
  if (!context) throw new Error('useReducerOptionsPost debe usarse dentro de un ModalDeletePostProvider')

  return context
}
