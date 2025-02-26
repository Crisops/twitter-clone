import { FormEditProfileUser } from '@/types/store'
import { uploadImage } from '@/utils/supabase/storage/uploadImage'
import { Tables } from '@/types/database.types'

type UploadImagesEditProfileOutPut = Omit<FormEditProfileUser, 'name' | 'biography' | 'location' | 'web_site'>

export async function uploadImagesEditProfile (images: (File | null)[], idUserSession: Tables<'users'>['id']): Promise<UploadImagesEditProfileOutPut> {
  const [avatar, banner] = images
  const imagesUrls: UploadImagesEditProfileOutPut = {
    avatar_url: '',
    banner_url: ''
  }

  try {
    if (avatar) {
      const { imageUrl, error } = await uploadImage({ bucket: 'avatars', file: avatar, folder: `${idUserSession}/avatars` })
      if (error) throw new Error(error)
      imagesUrls.avatar_url = imageUrl
    }
    if (banner) {
      const { imageUrl, error } = await uploadImage({ bucket: 'avatars', file: banner, folder: `${idUserSession}/banners` })
      if (error) throw new Error(error)
      imagesUrls.banner_url = imageUrl
    }

    return imagesUrls
  } catch (error) {
    throw new Error(`${(error as Error).message}`)
  }
}
