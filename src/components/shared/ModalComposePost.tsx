import { Modal, ModalBody, ModalContent, ModalHeader, ModalVariantProps } from '@heroui/react'
import { ReactNode } from 'react'

interface ModalComposePostProps {
    isOpen: boolean
    placement: ModalVariantProps['placement']
    size: ModalVariantProps['size']
    handleClose: () => void
    formTweet: ReactNode
}

export default function ModalComposePost ({ isOpen, placement, size, handleClose, formTweet }: ModalComposePostProps) {
  return (
    <Modal
      isOpen={isOpen}
      placement={placement}
      size={size}
      onClose={handleClose}
      classNames={{ base: ['bg-black min-h-72'], backdrop: ['bg-[#5b708366]'], closeButton: ['left-1 w-fit hover:bg-white/10 transition-colors ease-in duration-150 text-white text-xl'] }}
    >
      <ModalContent>
        <>
          <ModalHeader className='flex flex-col gap-1' />
          <ModalBody className='w-full flex-row py-6 min-[500px]:py-2'>
            {formTweet}
          </ModalBody>
        </>
      </ModalContent>
    </Modal>
  )
}
