import { Tables } from '@/types/database.types'
import { uploadImage } from '@/utils/supabase/storage/uploadImage'

export async function uploadImageEditProfile (image: File, idUserSession: Tables<'users'>['id'], folder: 'avatars' | 'banners'): Promise<string> {
  try {
    const { imageUrl, error } = await uploadImage({ bucket: 'avatars', file: image, folder: `${idUserSession}/${folder}` })
    if (error) throw new Error(error)
    return imageUrl
  } catch (error) {
    throw new Error(`${(error as Error).message}`)
  }
}
