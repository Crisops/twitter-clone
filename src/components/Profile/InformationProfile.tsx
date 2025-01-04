import React from 'react'
import PictureProfile from './PictureProfile'
import { Tables } from '@/types/database.types'
import UserData from './UserData'

interface InformationProfileProps {
  idUserVisited: Tables<'users'>['id']
  name: Tables<'users'>['name']
  username: Tables<'users'>['username']
  biography: Tables<'users'>['biography']
  followers:Tables<'users'>['followers']
  following:Tables<'users'>['following']
  location:Tables<'users'>['location']
  webSite:Tables<'users'>['web_site']
  bannerUrl: Tables<'users'>['banner_url']
  avatarUrl: Tables<'users'>['avatar_url']
  createdAt: Tables<'users'>['created_at']
}

export default function InformationProfile ({ idUserVisited, name, username, biography, followers, following, location, webSite, bannerUrl, avatarUrl, createdAt }: InformationProfileProps) {
  return (
    <>
      <PictureProfile idUserVisited={idUserVisited} username={username} bannerUrl={bannerUrl} avatarUrl={avatarUrl} />
      <UserData
        name={name}
        username={username}
        createdAt={createdAt}
        biography={biography}
        followers={followers}
        following={following}
        location={location}
        webSite={webSite}
      />
    </>
  )
}
