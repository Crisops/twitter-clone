import ChooseViewTwitts from "./ChooseViewTwitts";
import WriteTweet from "./WriteTweet";

export default function SectionTwittsMain() {
  return (
    <section className="h-[200vh]">
        <div className="sticky top-0 w-full h-14 border-b border-zinc-900 z-10">
            <ChooseViewTwitts/>
        </div>
        <WriteTweet/>
    </section>
  )
}
