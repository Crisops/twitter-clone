import { Tables } from '@/types/database.types'
import { getPlaiceholder } from 'plaiceholder'

interface getBase64Props {
  url: Tables<'tweets'>['image_url']
}

export const getBase64 = async ({ url }: getBase64Props) => {
  try {
    if (!url) throw new Error('Error. La url de la imagen se debe proporcionar')
    const res = await fetch(url)
    if (!res.ok) throw new Error('Error. Failed get url image')

    const buffer = await res.arrayBuffer()

    const { base64, metadata: { width, height } } = await getPlaiceholder(Buffer.from(buffer))

    return {
      base64,
      width,
      height
    }
  } catch (error) {
    console.log(error)
    throw error
  }
}
