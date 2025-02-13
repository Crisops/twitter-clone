import { useContext } from 'react'
import { ModalContext } from '@/context/ModalComposeContext'

export const useReducerModal = () => {
  const context = useContext(ModalContext)
  if (!context) throw new Error('useReducerModal debe usarse dentro de un ModalProvider')
  return context
}
