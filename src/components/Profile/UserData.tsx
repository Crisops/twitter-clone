import { Tables } from '@/types/database.types'

import Biography from './Biography'
import MoreAboutMe from './MoreAboutMe'
import Followers from './Followers'

interface UserDataProps {
  name: Tables<'users'>['name']
  username: Tables<'users'>['username']
  biography: Tables<'users'>['biography']
  followers:Tables<'users'>['followers']
  following:Tables<'users'>['following']
  location:Tables<'users'>['location']
  webSite:Tables<'users'>['web_site']
  createdAt: Tables<'users'>['created_at']
}

function UserData ({ name, username, createdAt, biography, followers, following, webSite, location }: UserDataProps) {
  return (
    <section className='my-3 px-3'>
      <header>
        <h1 className='text-xl font-bold text-white'>{name}</h1>
        <span className='text-base font-normal text-zinc-500'>@{username}</span>
      </header>
      <Biography biography={biography} />
      <MoreAboutMe webSite={webSite} location={location} createdAt={createdAt} />
      <Followers username={username} followers={followers} following={following} />
    </section>
  )
}

export default UserData
