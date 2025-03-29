'use client'

import { signup } from '@/actions/actions'
import Button from '@/components/shared/Button'
import { IconGoogle } from '@/components/Icons'

export const ButtonGoogle = () => {
  const handleSignUpGoogleAuth = async () => {
    await signup({ provider: 'google' })
  }

  return (
    <Button onPress={handleSignUpGoogleAuth} startContent={<IconGoogle />} className='text-zinc-700 bg-white w-full h-9 font-medium' variant='solid' radius='full'>
      Registrarse con Google
    </Button>
  )
}
