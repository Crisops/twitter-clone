export default function ChooseViewTwitts () {
  return (
    <div className='hidden min-[500px]:block sticky top-0 w-full h-14 border-b border-zinc-700 z-10'>
      <div className='flex justify-between items-center h-full [&>div]:flex [&>div]:justify-center [&>div]:items-center transition-all duration-200 backdrop-blur-md bg-black/60'>
        <div className='relative flex-grow h-full'>
          <div className='absolute w-1/4 h-1 left-1/2 bottom-0 -translate-x-1/2 rounded-full bg-sky-500' />
          <button className='w-full h-full text-white text-base font-bold transition-colors duration-200 hover:bg-white/10 '>Para ti</button>
        </div>
        <div className='flex-grow h-full'>
          <button className='w-full h-full text-zinc-500 text-base font-medium transition-colors duration-200 hover:bg-white/10'>Siguiendo</button>
        </div>
      </div>
    </div>
  )
}
