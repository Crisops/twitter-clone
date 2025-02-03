import { useEffect, useState } from 'react'
import { getUserSearch } from '@/utils/supabase/getUserSearch'
import { UsersSearch } from '@/types/querys-db'
import CardSearch from './CardSearch'

interface MatchingUsersProps {
   valueInput: string
   searchQuery: string
}

export default function MatchingUsers ({ valueInput, searchQuery }: MatchingUsersProps) {
  const [matchingUsers, setMachingUsers] = useState<UsersSearch[]>([])

  useEffect(() => {
    const getUsersSearch = async () => {
      const result = await getUserSearch({ query: searchQuery })
      setMachingUsers(result)
      console.log(result)
    }

    getUsersSearch()
  }, [searchQuery])

  return (
    <section className={`${valueInput.length === 0 ? 'hidden' : 'block w-full'}`}>
      <div className='w-full h-full py-0.5'>
        <div className='flex flex-col w-full'>
          {
            matchingUsers.map(({ id, name, username, src }) => (
              <CardSearch
                key={id}
                name={name}
                username={username}
                src={src}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}
