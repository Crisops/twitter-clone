'use client'

import { signOut } from '@/actions/actions'

export default function SignOutUser ({ username }: {username: string}) {
  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <div className='relative top-0 left-0 w-72 h-24 flex items-end py-2'>
      <div className='hover:bg-slate-600/10 cursor-pointer flex-grow'>
        <div onClick={handleSignOut} role='button' className='py-3 px-4'>
          <div className='max-w-36'>
            <span className='text-white text-base font-medium'>Cerrar la sesión de @{username}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
