import { v4 as uuidv4 } from 'uuid'
import { Tables } from '@/types/database.types'
import imageCompression from 'browser-image-compression'
import { createClient } from '@/utils/supabase/client'

interface UploadImageProps {
    bucket: 'post-tweets' | 'avatars' | 'posts-comments'
    file: File
    folder: Tables<'users'>['id'] | (Tables<'tweets'>['id'] & Tables<'users'>['id'])
}

const getStorage = () => {
  const supabase = createClient()
  return supabase
}

export const uploadImage = async ({ bucket, file, folder }: UploadImageProps) => {
  const fileName = file.name
  const fileExt = fileName.split('.').pop()?.toLocaleLowerCase()
  const filePath = `${folder}/${uuidv4()}.${fileExt}`

  try {
    file = await imageCompression(file, {
      maxSizeMB: 1
    })
  } catch (error) {
    console.error(error)
    return { imageUrl: '', error: 'Image compression failed' }
  }

  const { storage } = getStorage()
  const { error } = await storage.from(bucket).upload(filePath, file)

  if (error) return { imageUrl: '', error: 'Image upload failed' }

  const { data: { publicUrl } } = storage.from(bucket).getPublicUrl(filePath)

  return { imageUrl: publicUrl, error: '' }
}
