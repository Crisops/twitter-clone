'use client'

import React, { createContext, ReactNode, useReducer, useState, useTransition } from 'react'
import { Tables } from '@/types/database.types'
import { deleteTweet } from '@/actions/actions'

type ReducerType = {
    state: {
      component: 'popover' | 'modal' | ''
    }
    action: {
      type: 'OPEN_POPOVER' | 'OPEN_MODAL' | 'CLOSE'
    }
}

type ModalContextType = {
    message: string | null
    view: ReducerType['state']
    dispatch: React.Dispatch<ReducerType['action']>
    handleDeletePost: ({ id, user_id }: {id: Tables<'tweets'>['id'], user_id: Tables<'users'>['id']}) => void
    isPending: boolean
}

export const ModalDeletePostContext = createContext<ModalContextType | null>(null)

function reducer (state:ReducerType['state'], action: ReducerType['action']): ReducerType['state'] {
  switch (action.type) {
    case 'OPEN_POPOVER':
      return { component: 'popover' }
    case 'OPEN_MODAL':
      return { component: 'modal' }
    case 'CLOSE':
      return { component: '' }
    default:
      return state
  }
}

export const ModalDeletePostProvider = ({ children }: {children: ReactNode | ReactNode[]}) => {
  const [view, dispatch] = useReducer(reducer, { component: '' })
  const [isPending, startTransition] = useTransition()
  const [message, setMessageError] = useState<string | null>(null)

  const handleDeletePost = ({ id: tweetId, user_id: userId }: {id: Tables<'tweets'>['id'], user_id: Tables<'users'>['id']}): void => {
    dispatch({ type: 'CLOSE' })
    startTransition(async () => {
      try {
        const { error } = await deleteTweet({ id: tweetId, user_id: userId })
        if (error) throw new Error('Error. Algo falló al eliminar tu post')
        setMessageError('Se eliminó tu post')
      } catch (error: Error | unknown) {
        const message = error instanceof Error ? error.message : 'Error desconocido'
        setMessageError(message)
      }
    })
  }

  return (
    <ModalDeletePostContext.Provider value={{ message, view, isPending, dispatch, handleDeletePost }}>
      {children}
    </ModalDeletePostContext.Provider>
  )
}
