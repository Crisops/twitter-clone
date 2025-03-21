'use client'

import { HTMLProps, ReactNode } from 'react'
import { ButtonVariantProps, ModalVariantProps } from '@heroui/react'
import { useReducerModal } from '@/hooks/useReducerModal'
import ShowModal from '@/components/shared/ShowModal'
import Button from './Button'

interface ButtonModalComposePostPropsClient {
  variant: ButtonVariantProps['variant']
  className: HTMLProps<HTMLElement>['className']
  children: ReactNode
  sizeModal: ModalVariantProps['size']
  placement: ModalVariantProps['placement']
  content?: ReactNode
}

export default function ButtonModalComposePostClient ({ children, className, variant, sizeModal, placement, content }: ButtonModalComposePostPropsClient) {
  const { modal, dispatch } = useReducerModal()

  const { open } = modal

  const handleOpenModal = (): void => {
    dispatch({ type: 'OPEN_MODAL' })
  }

  const handleClose = (): void => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  return (
    <>
      <div className='flex justify-end xl:justify-start'>
        <Button disableAnimation className={className} variant={variant} radius='full' size='lg' onPress={handleOpenModal}>
          {content}
        </Button>
      </div>
      <ShowModal
        hideCloseButton={false}
        isOpen={open}
        placement={placement}
        size={sizeModal}
        content={children}
        handleClose={handleClose}
      />
    </>
  )
}
