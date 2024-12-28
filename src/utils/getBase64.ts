import { getPlaiceholder } from 'plaiceholder'

export const getBase64 = async ({ url }: {url: string}) => {
  try {
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
