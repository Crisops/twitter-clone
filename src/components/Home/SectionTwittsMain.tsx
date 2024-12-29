import ChooseViewTwitts from './ChooseViewTwitts'
import WriteTweet from './WriteTweet'
import { Suspense } from 'react'
import ViewAllTweets from './ViewAllTweets'
import ChooseViewTweetsMoviel from '@/components/Movile/Home/ChooseViewTweetsMoviel'

export default async function SectionTwittsMain () {
  return (
    <section className='h-full'>
      <ChooseViewTwitts />
      <ChooseViewTweetsMoviel />
      <WriteTweet />
      <Suspense fallback='cargando...'>
        <ViewAllTweets />
      </Suspense>
    </section>
  )
}
