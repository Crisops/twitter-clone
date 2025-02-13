'use client'

import { signup } from '@/actions/actions'
import { IconGoogle } from '@/components/Icons'

export const ButtonGoogle = ({ textContent }: {textContent: string}) => {
  const handleSignUpGoogleAuth = async () => {
    await signup()
  }

  return (
    <div className='relative bg-white flex items-center justify-center rounded-full gap-4'>
      <IconGoogle />
      <button onClick={handleSignUpGoogleAuth} className='text-sm text-zinc-700 py-2 pr-2 font-medium'>{textContent}</button>
    </div>
  )
}
