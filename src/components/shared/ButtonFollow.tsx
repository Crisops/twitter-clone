'use client'

import { Button } from '@heroui/react'
import { startTransition, useOptimistic } from 'react'
import { deleteFollowUser, insertFollowUser } from '@/actions/actions'
import { Tables, TablesInsert } from '@/types/database.types'

interface ButtonFollowProps {
    idUserSession: Tables<'users'>['id']
    idUserProfile: Tables<'users'>['id']
    hiddenButtonFollow: boolean
    validateStateInitialFollow: boolean
}

function updateFollowedOptimistic (newState: boolean) {
  return !newState
}

export default function ButtonFollow ({ idUserSession, idUserProfile, hiddenButtonFollow, validateStateInitialFollow }: ButtonFollowProps) {
  const [optimisticFollowed, setOptimisticFollowed] = useOptimistic(validateStateInitialFollow, updateFollowedOptimistic)

  const handleFollowUser = async ({ user_id_follower: idUserFollower, user_id_following: idUserFollowing }: TablesInsert<'followers'>) => {
    startTransition(() => {
      setOptimisticFollowed(optimisticFollowed)
    })

    let error
    if (optimisticFollowed) {
      const response = await deleteFollowUser({ user_id_follower: idUserFollower, user_id_following: idUserFollowing })
      error = response.error
    } else {
      const response = await insertFollowUser({ user_id_follower: idUserFollower, user_id_following: idUserFollowing })
      error = response.error
    }

    if (error) {
      setOptimisticFollowed(optimisticFollowed)
    }
  }

  return (
    <Button
      className={`${hiddenButtonFollow ? 'hidden' : ''} ${optimisticFollowed ? 'bg-transparent text-foreground border-slate-500 before:content-["Siguiendo"] before:text-white before:opacity-100 hover:before:hidden hover:before:opacity-0 hover:after:content-["Dejar_de_seguir"] after:hidden hover:after:block after:opacity-0 hover:after:opacity-100 hover:after:text-red-600 after:font-semibold hover:border-red-600' : 'bg-white text-black'} border-1 font-semibold text-base py-2 px-3`}
      radius='full'
      size='sm'
      variant={optimisticFollowed ? 'bordered' : 'solid'}
      onPress={() => handleFollowUser({ user_id_follower: idUserSession, user_id_following: idUserProfile })}
    >
      {optimisticFollowed ? '' : 'Seguir'}
    </Button>
  )
}
