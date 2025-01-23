'use client'

import { Button } from '@heroui/react'
import { useReducer } from 'react'
import { deleteFollowUser, insertFollowUser } from '@/actions/actions'
import { Tables, TablesInsert } from '@/types/database.types'
import { ReducerAction } from '@/types/generics'

interface ButtonFollowProps {
    idUserSession: Tables<'users'>['id']
    idUserProfile: Tables<'users'>['id']
    hiddenButtonFollow: boolean
    validateStateInitialFollow: boolean
}

function reducer (state: boolean, action: ReducerAction) {
  switch (action.type) {
    case 'follow':
      return true
    case 'unfollow':
      return false
    default:
      return state
  }
}

export default function ButtonFollow ({ idUserSession, idUserProfile, hiddenButtonFollow, validateStateInitialFollow }: ButtonFollowProps) {
  const [isFollowed, dispatch] = useReducer(reducer, validateStateInitialFollow)

  const handleFollowUser = async ({ user_id_follower: idUserFollower, user_id_following: idUserFollowing }: TablesInsert<'followers'>) => {
    if (isFollowed) {
      const { error } = await deleteFollowUser({ user_id_follower: idUserFollower, user_id_following: idUserFollowing })
      if (error) {
        dispatch({ type: 'follow' })
        return
      }
      dispatch({ type: 'unfollow' })
      return
    }

    const { error } = await insertFollowUser({ user_id_follower: idUserFollower, user_id_following: idUserFollowing })
    if (error) {
      dispatch({ type: 'unfollow' })
      return
    }
    dispatch({ type: 'follow' })
  }

  return (
    <Button
      className={`${hiddenButtonFollow ? 'hidden' : ''} ${isFollowed ? 'bg-transparent text-foreground border-slate-500 before:content-["Siguiendo"] before:text-white before:opacity-100 hover:before:hidden hover:before:opacity-0 hover:after:content-["Dejar_de_seguir"] after:hidden hover:after:block after:opacity-0 hover:after:opacity-100 hover:after:text-red-600 after:font-semibold hover:border-red-600' : 'bg-white text-black'} border-1 font-semibold text-base py-2 px-3`}
      radius='full'
      size='sm'
      variant={isFollowed ? 'bordered' : 'solid'}
      onPress={() => handleFollowUser({ user_id_follower: idUserSession, user_id_following: idUserProfile })}
    >
      {isFollowed ? '' : 'Seguir'}
    </Button>
  )
}
