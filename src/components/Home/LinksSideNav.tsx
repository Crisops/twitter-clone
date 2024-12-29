import Link from 'next/link'
import { type LinksAsideNavHome } from '@/types/generics'

interface LinksSideNavProps {
  links: LinksAsideNavHome[]
  viewMovil?: boolean
}

export default function LinksSideNav ({ links, viewMovil }: LinksSideNavProps) {
  return (
    <>
      {
        links.map(({ href, icon, text }, index) => (
          <li key={index} className='group'>
            <Link href={href} className={`w-full flex  ${viewMovil ? 'justify-start' : 'justify-end xl:justify-start'}`}>
              <div className={` ${viewMovil ? 'w-full group-hover:bg-[#5b70831A]' : 'w-max rounded-full group-hover:bg-white/10'} py-3 pr-4 transition-colors duration-150`}>
                <div className='flex items-center justify-start gap-5 pl-3 pr-2'>
                  <div>
                    {icon}
                  </div>
                  <div className={`${viewMovil ? 'block' : 'hidden xl:block'}`}>
                    <span className='text-white font-semibold text-xl'>{text}</span>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))
        }
    </>
  )
}
