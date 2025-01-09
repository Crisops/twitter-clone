import { Form } from './Form'
import { HeaderFormAuth } from '../shared/HeaderFormAuth'

export const SectionForm = () => {
  return (
    <section className='w-screen h-screen md:max-w-[600px] md:h-[660px] bg-black md:rounded-3xl'>
      <div className='relative w-full h-full'>
        <HeaderFormAuth />
        <Form />
      </div>
    </section>
  )
}
