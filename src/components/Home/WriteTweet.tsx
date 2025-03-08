import FormTweetServer from '@/components/Home/FormTweetServer'
import { ModalProvider } from '@/context/ModalComposeContext'

export default function WriteTweet () {
  return (
    <div className='hidden sm:block relative top-0 left-0 max-h-max border-b border-zinc-700'>
      <div className='w-full'>
        <ModalProvider>
          <FormTweetServer className='flex flex-col w-full h-full px-4 pt-4' loadingForm='create-post' />
        </ModalProvider>
      </div>
    </div>
  )
}
