import { IconDots } from "@tabler/icons-react";

export default function TweetHeaderContent() {
  return (
    <header className='flex items-center justify-between'>
        <div className='flex gap-x-1 items-center [&>div>span]:text-base'>
            <div>
                <span className="text-white font-medium">Alejandro Pérez</span>
            </div>
            <div>
                <span className="text-zinc-500 font-normal">@CrisopsDev</span>
            </div>
            <div>
                <span className="text-zinc-500 font-normal">·</span>
            </div>
            <div>
                <span className="text-zinc-500 font-normal">24h</span>
            </div>
        </div>
        <div >
            <IconDots size={20} color="#eee"/>
        </div>
    </header>
  )
}
