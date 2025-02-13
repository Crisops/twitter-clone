import { getTweets } from '@/utils/supabase/getTweets'
import Tweet from '@/components/Home/Tweet'

export async function ViewAllTweets () {
  const tweets = await getTweets()
  return (
    <section>
      {tweets.map((tweet) => <Tweet key={tweet.id} tweet={{ ...tweet }} />)}
    </section>
  )
}

export default ViewAllTweets
