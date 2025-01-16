import Tweet from '@/components/Home/Tweet'
import { Tables } from '@/types/database.types'
import { getTweetsAndRetweets } from '@/utils/supabase/getTweets'
import { getUserProfileByUsername } from '@/utils/supabase/getUser'

interface PostsPageProps {
  params: {
    username: Tables<'users'>['username']
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
