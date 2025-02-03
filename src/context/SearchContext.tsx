'use client'

import { createContext, useState, useRef, ReactNode } from 'react'

interface SearchContextProps {
    open: boolean
    setOpen: (open: boolean) => void
    handleCardClick: () => void
    handleBlur: () => void
}

export const SearchContext = createContext<SearchContextProps | undefined>(undefined)

export const SearchProvider = ({ children }: {children: ReactNode | ReactNode[]}) => {
  const [open, setOpen] = useState<boolean>(false)
  const blurTimeout = useRef<NodeJS.Timeout | null>(null)

  const handleCardClick = () => {
    if (blurTimeout.current) {
      clearTimeout(blurTimeout.current)
    }
  }

  const handleBlur = () => {
    blurTimeout.current = setTimeout(() => {
      setOpen(false)
    }, 100)
  }

  return (
    <SearchContext.Provider value={{ open, setOpen, handleCardClick, handleBlur }}>
      {children}
    </SearchContext.Provider>
  )
}
