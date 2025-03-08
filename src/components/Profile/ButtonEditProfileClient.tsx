'use client'

import { ReactNode } from 'react'
import { Button } from '@heroui/button'
import { useDevice } from '@/hooks/useDevice'
import { useEditProfileContext } from '@/hooks/useEditProfileContext'
import ShowModal from '@/components/shared/ShowModal'
import ValidateChangesEditProfile from '@/components/Profile/ValidateChangesEditProfile'

interface ButtonEditProfileClientProps {
  children: ReactNode
}

function ButtonEditProfileClient ({ children: formEditProfile }: ButtonEditProfileClientProps) {
  const { isEqualData, openModal, dispatch } = useEditProfileContext()
  const { deviceType } = useDevice()

  const handleOpenModal = () => {
    dispatch({ type: 'OPEN_MODAL_EDIT_PROFILE' })
  }

  const handleCloseModalEdit = () => {
    if (isEqualData) {
      dispatch({ type: 'CLOSE_MODAL' })
    } else {
      dispatch({ type: 'OPEN_MODAL_VALIDATE_CHANGES' })
    }
  }

  const handleCloseModalValidateChange = () => {
    dispatch({ type: 'OPEN_MODAL_EDIT_PROFILE' })
  }

  return (
    <>
      <Button onPress={handleOpenModal} variant='bordered' size='md' radius='full' className='bg-transparent  hover:bg-white/10 border-slate-500 text-medium'>
        Editar Perfil
      </Button>
      <ShowModal
        isOpen={(openModal.modal === 'edit_profile' && openModal.open) || openModal.modal === 'validate_changes'}
        size={deviceType === 'mobile' ? 'full' : 'xl'}
        hideCloseButton={false}
        placement='center'
        handleClose={handleCloseModalEdit}
        content={formEditProfile}
      />
      <ShowModal
        isOpen={openModal.modal === 'validate_changes' && openModal.open}
        size={deviceType === 'mobile' ? 'full' : 'xs'}
        hideCloseButton={false}
        placement='center'
        handleClose={handleCloseModalValidateChange}
        content={<ValidateChangesEditProfile />}
      />
    </>

  )
}

export default ButtonEditProfileClient
