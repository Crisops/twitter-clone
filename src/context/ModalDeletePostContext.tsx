'use client'

import React, { createContext, ReactNode, useReducer } from 'react'
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
    view: ReducerType['state']
    dispatch: React.Dispatch<ReducerType['action']>
    handleDeletePost: ({ id, user_id }: {id: Tables<'tweets'>['id'], user_id: Tables<'users'>['id']}) => Promise<void>
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

  const handleDeletePost = async ({ id: tweetId, user_id: userId }: {id: Tables<'tweets'>['id'], user_id: Tables<'users'>['id']}): Promise<void> => {
    dispatch({ type: 'CLOSE' })
    try {
      const { error } = await deleteTweet({ id: tweetId, user_id: userId })
      if (error) throw new Error('Error. Algo falló al eliminar tu post')
    } catch (error: Error | unknown) {
      const message = error instanceof Error ? error.message : 'Error desconocido'
      console.log(message)
    }
  }

  return (
    <ModalDeletePostContext.Provider value={{ view, dispatch, handleDeletePost }}>
      {children}
    </ModalDeletePostContext.Provider>
  )
}
