import MatchingUsers from '@/components/shared/MatchingUsers'

interface QueryUsersProps {
  valueInput: string
  searchQuery: string
}

export default function QueryUsers ({ valueInput, searchQuery }: QueryUsersProps) {
  return (
    <div className='w-full h-full bg-black shadow-lg shadow-white/20 rounded-lg'>
      <div className={`flex ${valueInput.length > 0 ? 'justify-start items-start pt-2' : 'items-center px-8 py-4'}`}>
        {valueInput.length === 0 && <p className='text-zinc-500 text-center'>Prueba buscar personas, listas o palabras clave</p>}
        {searchQuery.length > 0 && <MatchingUsers valueInput={valueInput} searchQuery={searchQuery} />}
      </div>
    </div>
  )
}
