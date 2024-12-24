import { getTweets } from "@/utils/supabase/getTweets";
import ChooseViewTwitts from "./ChooseViewTwitts";
import Tweet from "./Tweet";
import WriteTweet from "./WriteTweet";

export default async function SectionTwittsMain() {

  const tweets = await getTweets()

  return (
    <section className="h-full">
        <ChooseViewTwitts/>
        <WriteTweet/>
        <section>
          {
            tweets.map((tweet) => <Tweet key={tweet.id} tweet={{...tweet}}/>)
          }
        </section>
    </section>
  )
}
