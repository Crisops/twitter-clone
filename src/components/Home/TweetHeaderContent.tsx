import { IconDots } from "@tabler/icons-react";
import { formatTimeTweet } from "@/utils/formatTime";

interface TweetHeaderContentProps {
    name: string
    username: string
    created_at: string
}

export default function TweetHeaderContent({name, username, created_at}: TweetHeaderContentProps) {


  return (
    <header className='flex items-center justify-between'>
        <div className='flex gap-x-1 items-center [&>div>span]:text-base'>
            <div>
                <span className="text-white font-medium">{name}</span>
            </div>
            <div>
                <span className="text-zinc-500 font-normal">@{username}</span>
            </div>
            <div>
                <span className="text-zinc-500 font-normal">·</span>
            </div>
            <div>
                <span className="text-zinc-500 font-normal">{formatTimeTweet(created_at)}</span>
            </div>
        </div>
        <div >
            <IconDots size={20} color="#eee"/>
        </div>
    </header>
  )
}
