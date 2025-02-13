'use client'

import { useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import { useSearchContext } from '@/hooks/useSearchContext'
import InputSearch from '@/components/shared/InputSearch'
import QueryUsers from '@/components/Home/QueryUsers'

interface SearchPeopleProps {
  shouldHidden?: boolean
}

export default function SearchPeople ({ shouldHidden }:SearchPeopleProps) {
  const [valueInput, setValueInput] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const { open, setOpen } = useSearchContext()

  const inputRef = useRef<HTMLInputElement>(null)

  const pathname = usePathname()

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
    <div className={`${(shouldHidden && pathname === '/explore') ? 'hidden' : 'block w-full'}`}>
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
