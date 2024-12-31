import React from 'react'
import PictureProfile from './PictureProfile'
import { Tables } from '@/types/database.types'
import UserData from './UserData'

interface InformationProfileProps {
  idUserVisited: Tables<'users'>['id']
  bannerUrl: Tables<'users'>['banner_url']
  avatarUrl: Tables<'users'>['avatar_url']
  createdAt: Tables<'users'>['created_at']
}

export default function InformationProfile ({ idUserVisited, bannerUrl, avatarUrl, createdAt }: InformationProfileProps) {
  return (
    <>
      <PictureProfile idUserVisited={idUserVisited} bannerUrl={bannerUrl} avatarUrl={avatarUrl} />
      <UserData createdAt={createdAt} />
    </>
  )
}
