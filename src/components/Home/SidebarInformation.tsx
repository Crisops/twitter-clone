import SearchPeople from './SearchPeople'

export default function SidebarInformation () {
  return (
    <aside className='hidden lg:block sticky top-0 h-screen'>
      <SearchPeople />
    </aside>
  )
}
