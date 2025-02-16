'use client'

import { useState } from 'react'
import { Button } from '@heroui/react'
import FormEditProfile from '@/components/Profile/FormEditProfile'
import ShowModal from '@/components/shared/ShowModal'

function ButtonEditProfile () {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpenModal = () => {
    setOpen(true)
  }

  const handleCloseModal = () => {
    setOpen(false)
  }

  return (
    <>
      <Button onPress={handleOpenModal} variant='bordered' size='md' radius='full' className='bg-transparent  hover:bg-white/10 border-slate-500 text-medium'>
        Editar Perfil
      </Button>
      <ShowModal
        isOpen={open}
        size='xl'
        hideCloseButton={false}
        placement='center'
        handleClose={handleCloseModal}
        formTweet={<FormEditProfile />}
      />
    </>

  )
}

export default ButtonEditProfile
