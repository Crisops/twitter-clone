import WriteTweet from "./WriteTweet";

export default function SectionTwittsMain() {
  return (
    <section className="h-[200vh]">
        <div className="sticky top-0 w-full h-14 border-b border-zinc-900">
            <div className="flex justify-between items-center h-full [&>div]:flex [&>div]:justify-center [&>div]:items-center">
                <div className="flex-grow h-full">
                    <button className="w-full h-full text-white text-base font-bold transition-colors duration-200 hover:bg-white/10">Para ti</button>
                </div>
                <div className="flex-grow h-full">
                    <button className="w-full h-full text-zinc-500 text-base font-medium transition-colors duration-200 hover:bg-white/10">Siguiendo</button>
                </div>
            </div>
        </div>
        <WriteTweet/>
    </section>
  )
}
