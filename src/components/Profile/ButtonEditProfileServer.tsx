import { getSessionAuth, getUserProfile } from '@/utils/supabase/getUser'
import ModalEditProfileProvider from '@/context/ModalEditProfileContext'
import ButtonEditProfileClient from '@/components/Profile/ButtonEditProfileClient'
import FormEditProfile from '@/components/Profile/FormEditProfile'

export default async function ButtonEditProfileServer () {
  const { id } = await getSessionAuth()
  const { name, avatar_url: avatarUrl, banner_url: bannerUrl, biography, location, web_site: webSite } = await getUserProfile({ id })

  return (
    <ModalEditProfileProvider>
      <ButtonEditProfileClient>
        <FormEditProfile name={name} avatar={avatarUrl} bannerUrl={bannerUrl} biography={biography} location={location} webSite={webSite} />
      </ButtonEditProfileClient>
    </ModalEditProfileProvider>
  )
}
