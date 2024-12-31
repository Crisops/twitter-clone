import Link from 'next/link'

function ViewInteractivity () {
  return (
    <div className='w-full border-b border-zinc-700'>
      <div className='flex [&>div]:flex-grow [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div>button]:w-full [&>div>button]:h-full'>
        <div>
          <button className='transition-colors duration-200 ease-in-out hover:bg-white/10'>
            <Link className='block w-full h-full py-3' href='/username'>
              <span className='text-zinc-500 font-medium'>Posts</span>
            </Link>
          </button>
        </div>
        <div>
          <button className='transition-colors duration-200 ease-in-out hover:bg-white/10'>
            <Link className='block w-full h-full py-3' href='/media'>
              <span className='text-zinc-500 font-medium'>Multimedia</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ViewInteractivity
