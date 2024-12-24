import TweetImageUser from './TweetImageUser'
import TweetHeaderContent from './TweetHeaderContent'
import TweetContent from './TweetContent'
import TweetInteractions from './TweetInteractions'
import { type TweetInfo } from '@/types/querys-db'

interface TweetProps {
    tweet: TweetInfo
}

export default function Tweet({ tweet }: TweetProps) {
    
    const {content, image_url, likes, retuits, comments, created_at, creator} = tweet

    if(!creator) return
    
  return (
    <article className='w-full h-full border-b border-zinc-900'>
        <div className='py-2 px-4'>
            <div className='flex gap-x-2'>
                <TweetImageUser avatar_url={creator.avatar_url ?? ""} name={creator.name} username={creator.username}/>
                <div className='w-full h-full'>
                    <TweetHeaderContent name={creator.name} username={creator.username} created_at={created_at}/>
                    <section className='w-full h-full'>
                        <TweetContent content={content} image_url={image_url ?? ''}/>
                        <div className='pt-2'>
                            <TweetInteractions comments={comments} retuits={retuits} likes={likes}/>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </article>
  )
}

