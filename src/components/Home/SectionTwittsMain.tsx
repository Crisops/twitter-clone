import { Suspense } from 'react'
import ChooseViewTwitts from '@/components/Home/ChooseViewTwitts'
import ChooseViewTweetsMoviel from '@/components/Movile/Home/ChooseViewTweetsMoviel'
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import ViewAllTweets from '@/components/Home/ViewAllTweets'
import WriteTweet from '@/components/Home/WriteTweet'

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
