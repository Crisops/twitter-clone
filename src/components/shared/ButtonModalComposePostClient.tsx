'use client'

import { ReactNode } from 'react'
import { ButtonVariantProps, ModalVariantProps } from '@heroui/react'
import { useReducerModal } from '@/hooks/useReducerModal'
import ButtonOpenModal from '@/components/shared/ButtonOpenModal'
import ShowModal from '@/components/shared/ShowModal'

interface ButtonModalComposePostPropsClient {
  variant: ButtonVariantProps['variant']
  className: string
  children: ReactNode
  sizeModal: ModalVariantProps['size']
  placement: ModalVariantProps['placement']
}

export default function ButtonModalComposePostClient ({ children, className, variant, sizeModal, placement }: ButtonModalComposePostPropsClient) {
  const { modal, dispatch } = useReducerModal()

  const { device, open } = modal

  const handleOpenModalDesktop = (): void => {
    dispatch({ type: 'OPEN_DESKTOP' })
  }

  const handleOpenModalMovil = (): void => {
    dispatch({ type: 'OPEN_MOVILE' })
  }

  const handleClose = (): void => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  return (
    <>
      <div className='flex justify-end xl:justify-start'>
        <ButtonOpenModal className={className} variant={variant} handleOpenModal={device === 'desktop' ? handleOpenModalDesktop : handleOpenModalMovil} />
      </div>
      <ShowModal
        hideCloseButton={false}
        isOpen={(device === 'desktop' || device === 'movile') && open}
        placement={placement}
        size={sizeModal}
        content={children}
        handleClose={handleClose}
      />
    </>
  )
}
