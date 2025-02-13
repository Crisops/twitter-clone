import { FocusEvent, forwardRef } from 'react'
import { IconSearch } from '@tabler/icons-react'
import { Input } from '@heroui/react'
import { useSearchContext } from '@/hooks/useSearchContext'

interface InputSearchProps {
  value: string
  handleChange: (letter: string) => void
  handleFocus: () => void
  handleClearInput: () => void
}

const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>(({ value, handleChange, handleFocus, handleClearInput }, ref) => {
  const { handleBlur } = useSearchContext()
  const handleBlurInternal = (e: FocusEvent<HTMLInputElement>) => {
    const clearButton = e.relatedTarget as HTMLButtonElement
    if (clearButton) if (clearButton.dataset.slot === 'clear-button') return

    handleBlur()
  }

  return (
    <div className='relative w-full h-full max-h-28'>
      <Input
        ref={ref}
        autoComplete='off'
        type='search'
        onFocus={handleFocus}
        onBlur={handleBlurInternal}
        onValueChange={handleChange}
        onClear={handleClearInput}
        value={value}
        isClearable
        variant='bordered'
        size='md'
        classNames={{
          input: [
            'bg-transparent',
            'text-white',
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
    </div>

  )
})

InputSearch.displayName = 'InputSearch'

export default InputSearch
