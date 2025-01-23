import ButtonNavigationBack from '../shared/ButtonNavigationBack'

export default function HeaderBackPost () {
  return (
    <div className='sticky top-0 left-0 w-full h-14 px-2 z-50 backdrop-blur-md bg-black/60'>
      <div className='flex items-center h-full'>
        <div className='flex items-center w-16 h-full'>
          <ButtonNavigationBack />
        </div>
        <div className='flex-grow flex items-center h-full'>
          <span className='text-xl font-bold text-gray-100 pb-1'>Post</span>
        </div>
      </div>
    </div>
  )
}
