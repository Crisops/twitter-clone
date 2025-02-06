import { Button, ButtonVariantProps } from '@heroui/react'
import { IconFeather } from '@/components/Icons'

interface ButtonHeroProps {
    className: string
    variant: ButtonVariantProps['variant']
    handleOpenModal: () => void
}

export default function ButtonOpenModal ({ className, variant, handleOpenModal }: ButtonHeroProps) {
  return (
    <Button
      disableAnimation
      className={`${className} font-semibold text-medium xl:w-4/5 `}
      radius='full'
      size='lg'
      variant={variant} onPress={handleOpenModal}
    >
      <div className='xl:hidden'>
        <IconFeather className='fill-current size-6' />
      </div>
      <div className='hidden xl:block text-current'>
        Postear
      </div>
    </Button>
  )
}
