'use client'

import InputSearch from '@/components/shared/InputSearch'
import { useRef, useState } from 'react'
import QueryUsers from './QueryUsers'
import { useDebouncedCallback } from 'use-debounce'
import { useSearchContext } from '@/hooks/useSearchContext'

export default function SearchPeople () {
  const [valueInput, setValueInput] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const { open, setOpen } = useSearchContext()

  const inputRef = useRef<HTMLInputElement>(null)

  const debouncedSearch = useDebouncedCallback((letter: string) => {
    setSearchQuery(letter)
  }, 300)

  const handleFocus = () => {
    setOpen(true)
  }

  const handleChange = (letter: string) => {
    setValueInput(letter)
    debouncedSearch(letter)
  }

  const handleClearInput = () => {
    setOpen(true)
  }

  return (
    <div className='relative max-w-[370px] w-full ml-8 mt-1' data-search>
      <InputSearch
        ref={inputRef}
        handleChange={handleChange}
        handleFocus={handleFocus}
        handleClearInput={handleClearInput}
        value={valueInput}
      />
      {open && <QueryUsers valueInput={valueInput} searchQuery={searchQuery} />}
    </div>
  )
}
