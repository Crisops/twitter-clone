import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'

export default function SignOutUser ({ username }: {username: string}) {
  const router = useRouter()

  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <div className='absolute -top-1 left-0 -translate-y-full w-72 h-24 bg-black shadow-md shadow-white/20 rounded-3xl'>
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full rotate-180 border-r-8 border-r-transparent border-t-8 border-t-transparent border-l-8 border-l-transparent border-b-8 border-black drop-shadow-3xl' />
      <div onClick={handleSignOut} role='button' className='absolute top-0 left-0 w-full h-full flex items-end py-2'>
        <div className='hover:bg-slate-600/10 cursor-pointer flex-grow rounded-br-xl rounded-bl-xl'>
          <div className='py-3 px-4'>
            <div className='max-w-36'>
              <span className='text-white text-base font-medium'>Cerrar la sesión de @{username}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
