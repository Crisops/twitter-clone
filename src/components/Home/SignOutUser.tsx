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
