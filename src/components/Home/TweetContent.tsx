import Image from "next/image";

export default function TweetContent() {
  return (
    <>
        <div className='mb-2'>
            <p>Día de velitas, donde la gente se reune y goza en familia.</p>
        </div>
        <div className='w-full h-full'>
            <div className='flex'>
                <Image className='rounded-2xl border border-zinc-800' src={'https://stogyupktdyxbgmlhyaf.supabase.co/storage/v1/object/public/avatars/not%20user.jpeg'} width={350} height={350} alt='Descripción de la imagén'/>
            </div>
        </div>
    </>
  )
}
