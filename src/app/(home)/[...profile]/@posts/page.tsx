import Tweet from '@/components/Home/Tweet'
import { getTweetsById } from '@/utils/supabase/getTweets'
import { getUserProfileByUsername } from '@/utils/supabase/getUser'

interface PostsPageProps {
  params: {
    profile: string[]
  }
}

export default async function PostsPage ({ params: { profile } }:PostsPageProps) {
  const [username] = profile
  const { id } = await getUserProfileByUsername({ username })
  const tweets = await getTweetsById({ id })

  return (
    <section>
      {tweets.map((tweet) => <Tweet key={tweet.id} tweet={{ ...tweet }} />)}
    </section>
  )
}
