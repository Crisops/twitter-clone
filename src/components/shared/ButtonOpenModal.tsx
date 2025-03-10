import { HTMLProps, ReactNode } from 'react'
import { Button, ButtonVariantProps } from '@heroui/react'

interface ButtonHeroProps {
    className: HTMLProps<HTMLElement>['className']
    variant: ButtonVariantProps['variant']
    handleOpenModal: () => void
    children?: ReactNode
}

export default function ButtonOpenModal ({ className, variant, handleOpenModal, children }: ButtonHeroProps) {
  return (
    <Button
      disableAnimation
      className={className}
      radius='full'
      size='lg'
      variant={variant} onPress={handleOpenModal}
    >
      {children}
    </Button>
  )
}
