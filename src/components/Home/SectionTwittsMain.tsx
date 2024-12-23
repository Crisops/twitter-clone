import ChooseViewTwitts from "./ChooseViewTwitts";
import Tweet from "./Tweet";
import WriteTweet from "./WriteTweet";

export default function SectionTwittsMain() {
  return (
    <section className="h-[200vh]">
        <ChooseViewTwitts/>
        <WriteTweet/>
        <section>
          <Tweet/>
        </section>
    </section>
  )
}
