import SearchPeople from '@/components/Home/SearchPeople'

export default function HeaderDesktop () {
  return (
    <header className='hidden min-[500px]:block relative w-full h-16 border-b border-zinc-700 mt-1'>
      <div className='flex justify-center items-center'>
        <div className='w-4/5'>
          <SearchPeople />
        </div>
      </div>
    </header>
  )
}
