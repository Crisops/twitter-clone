import FormTweetServer from '@/components/Home/FormTweetServer'

export default function WriteTweet () {
  return (
    <div className='hidden sm:block relative top-0 left-0 max-h-max border-b border-zinc-700'>
      <div className='px-4 pt-4 w-full'>
        <FormTweetServer viewModal='home' />
      </div>
    </div>
  )
}
