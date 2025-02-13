import DrawerServer from '@/components/Movile/Home/DrawerServer'
import SearchPeople from '@/components/Home/SearchPeople'

export default function HeaderMovile () {
  return (
    <header className='min-[500px]:hidden relative w-full h-16'>
      <div className='flex justify-evenly items-center pt-2 px-3 gap-3'>
        <DrawerServer />
        <div className='w-full'>
          <SearchPeople />
        </div>
      </div>
    </header>
  )
}
