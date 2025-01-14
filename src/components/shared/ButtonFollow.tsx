'use client'

import { Button } from '@nextui-org/react'
import { useReducer } from 'react'
import { deleteFollowUser, insertFollowUser } from '@/actions/actions'
import { Tables } from '@/types/database.types'

interface ButtonFollowProps {
    idSessionUser: Tables<'users'>['id']
    idUserCreatorTweet: Tables<'users'>['id']
    validateFollowerUser: boolean
    validateStateInitialFollow: boolean
}

type ReducerState = {
    isFollowed: boolean;
  };

type ReducerAction = { type: 'follow' | 'unfollow' };

function reducer (state: ReducerState, action: ReducerAction) {
  switch (action.type) {
    case 'follow':
      return { isFollowed: true }
    case 'unfollow':
      return { isFollowed: false }
    default:
      return state
  }
}

export default function ButtonFollow ({ idSessionUser, idUserCreatorTweet, validateFollowerUser, validateStateInitialFollow }: ButtonFollowProps) {
  const [state, dispatch] = useReducer(reducer, { isFollowed: validateStateInitialFollow })

  const handleFollowUser = async ({ user_id_follower: idUserFollower, user_id_following: idUserFollowing }: Omit<Tables<'followers'>, 'created_at'>) => {
    if (state.isFollowed) {
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
      className={`${validateFollowerUser ? 'hidden' : ''} ${state.isFollowed ? 'bg-transparent text-foreground border-slate-500 before:content-["Siguiendo"] before:text-white before:opacity-100 hover:before:hidden hover:before:opacity-0 hover:after:content-["Dejar_de_seguir"] after:hidden hover:after:block after:opacity-0 hover:after:opacity-100 hover:after:text-red-600 after:font-semibold hover:border-red-600' : 'bg-white text-black'} border-1 font-semibold text-base py-2 px-3`}
      radius='full'
      size='sm'
      variant={state.isFollowed ? 'bordered' : 'solid'}
      onPress={() => handleFollowUser({ user_id_follower: idSessionUser, user_id_following: idUserCreatorTweet })}
    >
      {state.isFollowed ? '' : 'Seguir'}
    </Button>
  )
}
