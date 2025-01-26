import { Input } from '@heroui/react'
import { IconSearch } from '@tabler/icons-react'

function InputSearch () {
  return (
    <Input
      isClearable
      variant='bordered'
      size='md'
      classNames={{
        input: [
          'bg-transparent',
          'text-black/90 dark:text-white/90',
          'text-medium',
          'placeholder:text-zinc-500 placeholder:font-normal'
        ],
        innerWrapper: 'bg-transparent',
        inputWrapper: [
          'border-1 border-zinc-800',
          'shadow-xl',
          'data-[hover=true]:border-zinc-700',
          'h-11',
          'bg-black',
          'backdrop-blur-xl',
          'backdrop-saturate-200',
          'group-data-[focus=true]:bg-black',
          'group-data-[focus=true]:border-sky-500',
          'group-data-[focus=true]:border-2',
          '!cursor-text'
        ],
        clearButton: [
          'peer-data-[filled=true]:opacity-100 text-white text-2xl'
        ]
      }}
      placeholder='Buscar'
      radius='full'
      startContent={
        <IconSearch size={18} className='text-zinc-500 pointer-events-none flex-shrink-0' />
        }
    />
  )
}

export default InputSearch
