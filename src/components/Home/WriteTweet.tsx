import TweetTextArea from "./TweetTextArea"

export default function WriteTweet() {
  return (
    <div className="relative top-0 left-0 max-h-max border-b border-zinc-900">
        <div className="px-4 pt-4 w-full">
            <TweetTextArea/>
        </div>
    </div>
  )
}
