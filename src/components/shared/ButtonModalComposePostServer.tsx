import { ButtonVariantProps, ModalVariantProps } from '@heroui/react'
import { ModalProvider } from '@/context/ModalComposeContext'
import ButtonModalComposePostClient from '@/components/shared/ButtonModalComposePostClient'
import FormTweetServer from '@/components/Home/FormTweetServer'

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
