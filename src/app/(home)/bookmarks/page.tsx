import { getBookMarks } from '@/utils/supabase/getInterations'
import { getSessionAuth } from '@/utils/supabase/getUser'
import HeaderBackPost from '@/components/Posts/HeaderBackPost'
import NotBookmarks from '@/components/bookmarks/not-bookmarks'
import Tweet from '@/components/Home/Tweet'

export default async function BookmarksPage () {
  const { id } = await getSessionAuth()
  const bookmarks = await getBookMarks({ userId: id })

  return (
    <div className='w-full h-full border-x border-zinc-700'>
      <HeaderBackPost title='Guardados' />
      <section className='w-full h-full flex flex-col'>
        {
          bookmarks.length === 0
            ? <div className='w-full h-full flex justify-center text-zinc-600'><NotBookmarks /></div>
            : bookmarks.map(post => (<Tweet key={post?.tweet?.id} idUser={post?.tweet?.creator?.id} tweet={post?.tweet} />))
        }
      </section>
    </div>
  )
}
