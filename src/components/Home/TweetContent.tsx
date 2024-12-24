import Image from "next/image";

interface TweetContentProps {
  content: string,
  image_url: string
}


export default function TweetContent({content, image_url}: TweetContentProps) {
  return (
    <>
        <div className='mb-2'>
            <p>{content}</p>
        </div>
          <div className='w-full h-full'>
            <div className='flex'>
              {image_url !== '' && <Image className='rounded-2xl border border-zinc-800' src={image_url} width={350} height={350} alt='Descripción de la imagén'/>}
            </div>
          </div>
    </>
  )
}
