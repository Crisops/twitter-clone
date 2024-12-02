import { links } from '@/lib/links-footer-login'
import Link from 'next/link'

const Footer = () => {

  return (
    <footer className='relative w-full h-24 flex flex-col gap-1'>
        <div className='mx-20'>
          <div className="flex flex-wrap items-center justify-center 2xl:justify-between gap-4">
            {
              links.map((link, index) => <Link className='text-zinc-500 hover:underline' key={index} href={link.href}>{link.title}</Link>)
            }
          </div>
        </div>
        <div className='text-center'>
            <span className='text-zinc-500'>© 2024 Crisops</span>
        </div>
    </footer>
  )
}

export default Footer