import Link from 'next/link'

function ButtonEditProfile () {
  return (
    <button className='bg-transparent border border-slate-500 rounded-full py-1 px-4 transition-colors duration-200 ease-in-out hover:bg-white/10'>
      <Link href='settings/profile' className='text-white font-semibold text-base'>Editar perfil</Link>
    </button>
  )
}

export default ButtonEditProfile
