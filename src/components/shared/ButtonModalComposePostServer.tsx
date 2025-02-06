import { ButtonVariantProps, ModalVariantProps } from '@heroui/react'
import ButtonModalComposePostClient from './ButtonModalComposePostClient'
import FormTweetServer from '@/components/Home/FormTweetServer'
import { ModalProvider } from '@/context/ModalComposeContext'

interface ButtonModalComposePostServerProps {
  className: string
  variant: ButtonVariantProps['variant']
  sizeModal: ModalVariantProps['size']
  placement: ModalVariantProps['placement']
}

export default function ButtonModalComposePostServer ({ className, variant, sizeModal, placement }: ButtonModalComposePostServerProps) {
  return (
    <ModalProvider>
      <ButtonModalComposePostClient className={className} variant={variant} sizeModal={sizeModal} placement={placement}>
        <FormTweetServer viewModal='modal' />
      </ButtonModalComposePostClient>
    </ModalProvider>
  )
}
