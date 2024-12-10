import TweetImageUser from './TweetImageUser'
import TweetHeaderContent from './TweetHeaderContent'
import TweetContent from './TweetContent'
import TweetInteractions from './TweetInteractions'

export default function Tweet() {
  return (
    <article className='w-full h-full border-b border-zinc-900'>
        <div className='py-2 px-4'>
            <div className='flex gap-x-2'>
                <TweetImageUser/>
                <div className='w-full h-full'>
                    <TweetHeaderContent/>
                    <section className='w-full h-full'>
                        <TweetContent/>
                        <div className='pt-2'>
                            <TweetInteractions/>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </article>
  )
}

