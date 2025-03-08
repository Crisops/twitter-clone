import SectionTwittsMain from '@/components/Home/SectionTwittsMain'
import ButtonModalComposePostServer from '@/components/shared/ButtonModalComposePostServer'

export default function HomePage () {
  return (
    <>
      <SectionTwittsMain />
      <div className='fixed bottom-20 right-6 min-[500px]:hidden'>
        <ButtonModalComposePostServer
          className='min-w-14 h-14 bg-sky-500 text-white p-1 shadow-default/50'
          sizeModal='full'
          variant='shadow'
          placement='top-center'
          loadingForm='create-post'
        />
      </div>
    </>
  )
}
