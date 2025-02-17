import { useContext } from 'react'
import { ModalEditProfileContext } from '@/context/ModalEditProfileContext'

export const useEditProfileContext = () => {
  const context = useContext(ModalEditProfileContext)
  if (!context) throw new Error('useEditProfileContext debe usarse dentro de un ModalEditProfileProvider')
  return context
}
