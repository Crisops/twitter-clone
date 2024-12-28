import ChooseViewTwitts from './ChooseViewTwitts'
import WriteTweet from './WriteTweet'
import { Suspense } from 'react'
import ViewAllTweets from './ViewAllTweets'

export default async function SectionTwittsMain () {
  return (
    <section className='h-full'>
      <ChooseViewTwitts />
      <WriteTweet />
      <Suspense fallback='cargando...'>
        <ViewAllTweets />
      </Suspense>
    </section>
  )
}
