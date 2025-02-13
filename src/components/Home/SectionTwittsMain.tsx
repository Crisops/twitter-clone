import { Suspense } from 'react'
import ChooseViewTwitts from './ChooseViewTwitts'
import WriteTweet from './WriteTweet'
import ViewAllTweets from './ViewAllTweets'
import ChooseViewTweetsMoviel from '@/components/Movile/Home/ChooseViewTweetsMoviel'
import LoadingSpinner from '@/components/shared/LoadingSpinner'

export default async function SectionTwittsMain () {
  return (
    <section className='h-full min-[500px]:border-r min-[500px]:border-zinc-700'>
      <ChooseViewTwitts />
      <ChooseViewTweetsMoviel />
      <WriteTweet />
      <Suspense fallback={<LoadingSpinner />}>
        <ViewAllTweets />
      </Suspense>
    </section>
  )
}
