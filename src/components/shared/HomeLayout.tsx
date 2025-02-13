import { ReactNode } from 'react'
import { IconTwitter } from '@/components/Icons'
import Footer from '@/components/ChooseAccount/Footer'
import SectionForm from '@/components/ChooseAccount/SectionForm'

export const HomeLayout = ({ children }: {children?: ReactNode}) => {
  return (
    <section className='h-full'>
      <div className='flex flex-col mx-16 py-5 sm:py-0 sm:mx-16 justify-center lg:grid lg:place-items-center lg:grid-cols-2 h-full xl:pl-20'>
        <div className='lg:w-full lg:h-full lg:flex lg:justify-center lg:items-center'>
          <IconTwitter size='size-8 sm:size-12 lg:size-3/6' />
        </div>
        <SectionForm />
      </div>
      {children}
      <Footer />
    </section>
  )
}
