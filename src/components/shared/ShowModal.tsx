import { ReactNode } from 'react'
import { Modal, ModalBody, ModalContent, ModalHeader, ModalVariantProps } from '@heroui/react'

interface ModalComposePostProps {
    isOpen: boolean
    placement: ModalVariantProps['placement']
    size: ModalVariantProps['size']
    handleClose: () => void
    content: ReactNode
    hideCloseButton: boolean
}

export default function ShowModal ({ isOpen, placement, size, handleClose, hideCloseButton, content }: ModalComposePostProps) {
  return (
    <Modal
      isOpen={isOpen}
      placement={placement}
      hideCloseButton={hideCloseButton}
      size={size}
      onClose={handleClose}
      classNames={{ base: ['bg-black min-h-72'], backdrop: ['bg-zinc-950/50'], body: ['px-0'], closeButton: ['left-1 w-fit hover:bg-white/10 transition-colors ease-in duration-150 text-white text-xl'] }}
    >
      <ModalContent>
        <>
          <ModalHeader className='flex flex-col gap-1' />
          <ModalBody className='w-full flex-row py-6 min-[500px]:py-2'>
            {content}
          </ModalBody>
        </>
      </ModalContent>
    </Modal>
  )
}
