import { useEffect, useState } from 'react'
import { UsersSearch } from '@/types/querys-db'
import { getUserSearch } from '@/utils/supabase/getUserSearch'
import CardSearch from '@/components/shared/CardSearch'

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
    }

    getUsersSearch()
  }, [searchQuery])

  return (
    <section className={`w-full h-full max-h-[650px] ${valueInput.length === 0 ? 'hidden' : 'block overflow-y-auto'} `}>
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
