import { ButtonVariantProps, ModalVariantProps } from '@heroui/react'
import { Tables } from '@/types/database.types'
import { ModalProvider } from '@/context/ModalComposeContext'
import ButtonModalComposePostClient from '@/components/shared/ButtonModalComposePostClient'
import FormTweetServer from '@/components/Home/FormTweetServer'

interface ButtonModalComposePostServerProps {
  className: string
  idPost?: Tables<'tweets'>['id']
  variant: ButtonVariantProps['variant']
  sizeModal: ModalVariantProps['size']
  placement: ModalVariantProps['placement']
  loadingForm: 'create-post' | 'comment-post'
}

export default function ButtonModalComposePostServer ({ className, idPost, variant, sizeModal, placement, loadingForm }: ButtonModalComposePostServerProps) {
  return (
    <ModalProvider>
      <ButtonModalComposePostClient className={className} variant={variant} sizeModal={sizeModal} placement={placement}>
        <FormTweetServer className='flex flex-col w-full h-full px-6 pt-2' loadingForm={loadingForm} idPost={idPost} />
      </ButtonModalComposePostClient>
    </ModalProvider>
  )
}
