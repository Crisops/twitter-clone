import { ChangeEvent } from 'react'
import { FormEditProfileUser } from '@/types/store'
import { IconCameraPlus } from '@tabler/icons-react'
import { Input } from '@heroui/react'
import { useFormEditProfile } from '@/hooks/useFormEditProfile'

interface UpdateImagesProfileProps {
  registerName: keyof Omit<FormEditProfileUser, 'name' | 'biography' | 'location' | 'web_site'>
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function UpdateImageProfile ({ registerName, handleOnChange }:UpdateImagesProfileProps) {
  const { registerField } = useFormEditProfile()

  const { onChange, ...rest } = registerField(registerName)

  const handleChangeBanner = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e)
    handleOnChange(e)
  }

  return (
    <>
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
        <Input
          type='file'
          radius='full'
          accept='image/*'
          disableAnimation
          className='w-12 h-12 cursor-pointer'
          classNames={{ inputWrapper: ['bg-slate-800/20 backdrop-blur-sm transition-colors duration-100 ease-in-out data-[hover=true]:bg-default-200/30  !cursor-pointer'], input: ['sr-only'], label: ['pe-0 top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 group-data-[filled-within=true]:scale-100  cursor-pointer'] }}
          onChange={handleChangeBanner}
          label={<IconCameraPlus className='transition-opacity duration-150 ease-out' size={20} color='white' />}
          contentEditable={false}
          {...rest}
        />
      </div>
    </>
  )
}
