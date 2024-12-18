'use client'

import Image from "next/image";
import { useCreateTweet } from "@/hooks/useStore";
import { IconX } from "@tabler/icons-react";


export default function TweetImageLoad() {

    const {imageTweet, setImageTweet} = useCreateTweet(state => state)

    const handleClick = () => {
        setImageTweet("")
    }

  return (
    <div className="row-start-2 col-start-2 px-2">
        {imageTweet &&
            <div className="relative w-full max-h-[720px] overflow-hidden rounded-3xl">
                <Image className="w-full h-auto object-cover object-center" src={imageTweet} alt="Image load tweet" width={350} height={450}/>
                <div className="absolute flex justify-center items-center top-2 right-2">
                    <button onClick={handleClick} className="p-2 rounded-full bg-slate-900/60 backdrop-blur-sm transition-colors ease-in-out hover:bg-slate-800/70">
                        <IconX color="#fff" size={17}/>
                    </button>
                </div>
            </div>
        }
    </div>
  )
}
