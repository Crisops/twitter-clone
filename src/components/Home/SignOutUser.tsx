'use client'

import { useState } from 'react'
import { Button } from '@heroui/react'
import ShowModal from '@/components/shared/ShowModal'
import ValidateSignOut from '@/components/Home/validate-sign-out'
import { signOut } from '@/actions/actions'
export default function SignOutUser ({ username }: {username: string}) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleOpenModal = (): void => {
    setIsModalOpen(true)
  }

  const handleSignOut = async (): Promise<void> => {
    await signOut()
  }

  const handleCloseModal = (): void => {
    setIsModalOpen(false)
  }

  return (
    <div className='w-72 h-24 py-2'>
      <Button
        onPress={handleOpenModal}
        className='w-full h-full data-[hover=true]:bg-slate-600/10 rounded-none'
        variant='light'
      >
        <span className='text-white text-medium font-medium'>
          Cerrar la sesión de @{username}
        </span>
      </Button>
      <ShowModal
        isOpen={isModalOpen}
        placement='top-center'
        size='xs'
        hideCloseButton
        handleClose={handleCloseModal}
        content={<ValidateSignOut handleSignOut={handleSignOut} handleCloseModal={handleCloseModal} />}
      />
    </div>
  )
}
