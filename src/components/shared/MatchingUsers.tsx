import React from 'react'
import CardSearch from './CardSearch'

interface MatchingUsersProps {
   valueInput: string
   searchQuery: string
}

export default function MatchingUsers ({ valueInput, searchQuery }: MatchingUsersProps) {
  return (
    <section className={`${valueInput.length === 0 ? 'hidden' : 'block w-full'}`}>
      <div className='w-full h-full py-0.5'>
        <div className='flex flex-col w-full'>
          <CardSearch username='criale306' name='Alejandro Pérez' src='https://lh3.googleusercontent.com/a/ACg8ocIdoFpBGvCUcSGrTTWxiSweEzDkSESOmJMq_fmILY2khFmfNypo=s96-c' />
        </div>
      </div>
    </section>
  )
}
