'use client'

import { comeBackHome } from '@/actions/actions'
import { Tables } from '@/types/database.types'
import { IconArrowNarrowLeft } from '@tabler/icons-react'

interface ErrorAccountProps {
    username: Tables<'users'>['username']
}

function ErrorAccount ({ username }:ErrorAccountProps) {
  const handleBackNavigation = async () => {
    await comeBackHome()
  }

  return (
    <>
      <div className='hidden min-[500px]:flex items-center sticky top-0 w-full h-14 px-2 border-b border-zinc-900 z-10 backdrop-blur-md bg-black/60'>
        <div className='flex items-center'>
          <div className='flex items-center w-12 h-full'>
            <button onClick={handleBackNavigation} className='p-1.5 rounded-full transition-colors ease-in-out duration-200 hover:bg-white/10'>
              <IconArrowNarrowLeft />
            </button>
          </div>
          <div className='flex-grow flex flex-col justify-center'>
            <div>
              <span className='text-xl font-bold text-gray-100'>Perfil</span>
            </div>
          </div>
        </div>
      </div>
      <div className='relative w-full h-64'>
        <div className='absolute top-0 left-0 w-full h-48'>
          <div className='w-full h-48 bg-zinc-800' />
        </div>
        <div className='absolute left-0 bottom-0 w-full h-32 z-[2]'>
          <div className='ml-4 w-32 h-full rounded-full bg-zinc-950 outline -outline-offset-2 outline-4 outline-black hover:brightness-90  overflow-hidden' />
        </div>
      </div>
      <section className='my-3 px-3'>
        <header>
          <h1 className='text-xl font-bold text-white'>@{username}</h1>
        </header>
        <div className='flex justify-center items-center h-60'>
          <div className='flex flex-col'>
            <span className='text-white font-extrabold text-3xl'>Esta cuenta no existe</span>
            <span className='text-zinc-500 text-base'>Intenta hacer otra búsqueda.</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default ErrorAccount
