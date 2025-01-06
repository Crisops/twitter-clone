import { Spinner } from '@nextui-org/react'

export default function LoadingSpinner () {
  return (
    <div className='w-full flex justify-center pt-6'>
      <Spinner size='md' color='primary' />
    </div>
  )
}
