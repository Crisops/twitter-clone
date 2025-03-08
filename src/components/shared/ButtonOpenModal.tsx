import { Button, ButtonVariantProps } from '@heroui/react'
import { IconFeather } from '@/components/Icons'
import { useParams } from 'next/navigation'
import { IconMessageCircle } from '@tabler/icons-react'

interface ButtonHeroProps {
    className: string
    variant: ButtonVariantProps['variant']
    handleOpenModal: () => void
}

type Params = {
  idPost?: string
}

export default function ButtonOpenModal ({ className, variant, handleOpenModal }: ButtonHeroProps) {
  const { idPost } = useParams<Params>()

  return (
    <Button
      disableAnimation
      className={`${className} font-semibold text-medium xl:w-4/5 `}
      radius='full'
      size='lg'
      variant={variant} onPress={handleOpenModal}
    >
      <div className='xl:hidden'>
        {idPost ? <IconMessageCircle /> : <IconFeather className='fill-current size-6' />}
      </div>
      <div className='hidden xl:block text-current'>
        Postear
      </div>
    </Button>
  )
}
