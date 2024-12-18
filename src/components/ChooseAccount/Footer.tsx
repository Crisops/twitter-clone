import { linksFooter } from '@/lib/links'
import Link from 'next/link'

const Footer = () => {

  return (
    <footer className='relative w-full h-14 flex flex-col gap-1'>
        <div className='mx-16'>
          <div className="flex flex-wrap items-center justify-center 2xl:justify-between gap-2">
            {
              linksFooter.map((link, index) => <Link className='text-zinc-500 hover:underline text-sm' key={index} href={link.href}>{link.title}</Link>)
            }
          </div>
        </div>
        <div className='text-center'>
            <span className='text-zinc-500 text-sm'>© 2024 Crisops</span>
        </div>
    </footer>
  )
}

export default Footer