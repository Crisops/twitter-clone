import { ReactNode } from 'react'
import { IconMessageCircle } from '@tabler/icons-react'
import { Tables } from '@/types/database.types'
import ButtonModalComposePostServer from '@/components/shared/ButtonModalComposePostServer'
interface UsernameLayoutProps {
  children: ReactNode
  params: {
    idPost: Tables<'tweets'>['id']
  }
}

export default async function StatusLayout ({ children, params: { idPost } }: UsernameLayoutProps) {
  return (
    <section className='h-full border-x border-zinc-700'>
      {children}
      <div className='fixed bottom-20 right-6 min-[500px]:hidden'>
        <ButtonModalComposePostServer
          className='min-w-14 h-14 bg-sky-500 text-white p-1 shadow-default/50'
          sizeModal='full'
          variant='shadow'
          placement='top-center'
          loadingForm='comment-post'
          idPost={idPost}
        >
          <IconMessageCircle />
        </ButtonModalComposePostServer>
      </div>
    </section>
  )
}
