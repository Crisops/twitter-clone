import Tweet from '@/components/Home/Tweet'
import { getTweetsAndRetweets } from '@/utils/supabase/getTweets'
import { getUserProfileByUsername } from '@/utils/supabase/getUser'

interface PostsPageProps {
  params: {
    username: string
  }
}

export default async function PostsPage ({ params: { username } }:PostsPageProps) {
  const { id, name } = await getUserProfileByUsername({ username })
  const tweets = await getTweetsAndRetweets({ id })

  return (
    <section>
      {tweets.map((tweet) => <Tweet idUser={id} nameUserVisited={name} key={tweet.id} tweet={{ ...tweet }} />)}
    </section>
  )
}
