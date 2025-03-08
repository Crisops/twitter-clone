'use client'

import React, { createContext, useReducer, ReactNode } from 'react'

type ReducerType = {
  state: {
    open: boolean
  }
  action: {
    type: 'OPEN_MODAL' | 'CLOSE_MODAL'
  }
}

function reducer (state: ReducerType['state'], action: ReducerType['action']): ReducerType['state'] {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { open: true }
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
  const [modal, dispatch] = useReducer(reducer, { open: false })

  return (
    <ModalContext.Provider value={{ modal, dispatch }}>
      {children}
    </ModalContext.Provider>
  )
}
