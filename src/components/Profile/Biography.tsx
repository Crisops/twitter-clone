import { Tables } from '@/types/database.types'

interface BiographyProps {
  biography: Tables<'users'>['biography']
}

function Biography ({ biography }: BiographyProps) {
  return (
    <div className='my-2'>
      <p className='text-white max-w-96'>{biography}</p>
    </div>
  )
}

export default Biography
