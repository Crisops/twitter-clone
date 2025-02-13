'use client'

import { ReactNode } from 'react'
import {
  useDisclosure,
  ButtonVariantProps,
  ModalVariantProps
} from '@heroui/react'

import ButtonOpenModal from '@/components/shared/ButtonOpenModal'
import ShowModal from '@/components/shared/ShowModal'
import { useReducerModal } from '@/hooks/useReducerModal'

interface ButtonModalComposePostPropsClient {
  variant: ButtonVariantProps['variant']
  className: string
  children: ReactNode
  sizeModal: ModalVariantProps['size']
  placement: ModalVariantProps['placement']
}

export default function ButtonModalComposePostClient ({ children: formTweet, className, variant, sizeModal, placement }: ButtonModalComposePostPropsClient) {
  const { onOpen, onClose } = useDisclosure()

  const { modal, dispatch } = useReducerModal()

  const { device, open } = modal

  const handleOpenModalDesktop = () => {
    onOpen()
    dispatch({ type: 'OPEN_DESKTOP' })
  }

  const handleOpenModalMovil = () => {
    onOpen()
    dispatch({ type: 'OPEN_MOVILE' })
  }

  const handleClose = () => {
    onClose()
    dispatch({ type: 'CLOSE_MODAL' })
  }

  return (
    <>
      <div className='flex justify-end xl:justify-start'>
        {
          sizeModal === 'xl'
            ? <ButtonOpenModal className={className} variant={variant} handleOpenModal={handleOpenModalDesktop} />
            : <ButtonOpenModal className={className} variant={variant} handleOpenModal={handleOpenModalMovil} />
        }
      </div>
      {
          sizeModal === 'xl'
            ? <ShowModal hideCloseButton={false} isOpen={device === 'desktop' && open} placement={placement} size={sizeModal} formTweet={formTweet} handleClose={handleClose} />
            : <ShowModal hideCloseButton={false} isOpen={device === 'movile' && open} placement={placement} size={sizeModal} formTweet={formTweet} handleClose={handleClose} />
        }
    </>
  )
}
