'use client'

import React, { createContext, useReducer, ReactNode } from 'react'

type ReducerType = {
  state: {
    device: 'desktop' | 'movile' | ''
    open: boolean
  }
  action: {
    type: 'OPEN_DESKTOP' | 'OPEN_MOVILE' | 'CLOSE_MODAL'
  }
}

function reducer (state: ReducerType['state'], action: ReducerType['action']): ReducerType['state'] {
  switch (action.type) {
    case 'OPEN_DESKTOP':
      return { device: 'desktop', open: true }
    case 'OPEN_MOVILE':
      return { device: 'movile', open: true }
    case 'CLOSE_MODAL':
      return { ...state, open: false }
    default:
      return state
  }
}

type ModalContextType = {
  modal: ReducerType['state']
  dispatch: React.Dispatch<ReducerType['action']>
} | null

export const ModalContext = createContext<ModalContextType>(null)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modal, dispatch] = useReducer(reducer, { device: '', open: false })

  return (
    <ModalContext.Provider value={{ modal, dispatch }}>
      {children}
    </ModalContext.Provider>
  )
}
