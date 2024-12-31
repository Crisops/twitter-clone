import { Tables } from '@/types/database.types'

import Biography from './Biography'
import MoreAboutMe from './MoreAboutMe'
import Followers from './Followers'

interface UserDataProps {
    createdAt: Tables<'users'>['created_at']
}

function UserData ({ createdAt }: UserDataProps) {
  return (
    <section className='my-3 px-3'>
      <header>
        <h1 className='text-xl font-bold text-white'>Alejandro Pérez</h1>
        <span className='text-base font-normal text-zinc-500'>@crisopsdev</span>
      </header>
      <Biography />
      <MoreAboutMe createdAt={createdAt} />
      <Followers />
    </section>
  )
}

export default UserData
