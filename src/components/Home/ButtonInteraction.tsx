'use client'

import { HTMLProps, ReactNode, startTransition, useOptimistic } from 'react'
import NumberFlow from '@number-flow/react'
import { Tables } from '@/types/database.types'
import Button from '@/components/shared/Button'

type DataParametersProps = {
  user_id: Tables<'users'>['id']
  tweet_id: Tables<'tweets'>['id']
}

type OptimisticProps = {
  count: number,
  isActive: boolean
}

interface ButtonInteractionProps {
    textColor: 'text-green-500' | 'text-pink-600' | 'text-sky-500'
    className: HTMLProps<HTMLElement>['className']
    idUser: Tables<'users'>['id']
    idTweet: Tables<'tweets'>['id']
    icon: ReactNode
    data?: Tables<'retuits'>[] | Tables<'likes'>[]
    insertData?: ({ user_id, tweet_id }: DataParametersProps) => Promise<void>
    deleteData?: ({ user_id, tweet_id }: DataParametersProps) => Promise<void>
    quantity?: Tables<'tweets'>['comments'] | Tables<'tweets'>['retuits'] | Tables<'tweets'>['likes']
}

function updateOptimisticAction (state: OptimisticProps, action: 'start'): OptimisticProps {
  switch (action) {
    case 'start':
      return {
        count: state.isActive ? state.count - 1 : state.count + 1,
        isActive: !state.isActive
      }
    default:
      return state
  }
}

function ButtonInteraction ({ idUser, idTweet, quantity, icon, className, textColor, insertData, deleteData, data }:ButtonInteractionProps) {
  const initialCount = quantity ?? 0
  const initialIsActive = data?.some((item) => item.user_id === idUser && item.tweet_id === idTweet) ?? false

  const colorClassesNumber = {
    'text-green-500': 'group-hover/effect:text-green-500',
    'text-pink-600': 'group-hover/effect:text-pink-600',
    'text-sky-500': 'group-hover/effect:text-sky-500'
  }

  const groupHoverClass = colorClassesNumber[textColor] || ''

  const [optimistic, optimisticValidateAction] = useOptimistic({ count: initialCount, isActive: initialIsActive }, updateOptimisticAction)

  const handleSendData = async () => {
    startTransition(() => {
      optimisticValidateAction('start')
    })
    try {
      if (!optimistic.isActive) {
        await insertData?.({ user_id: idUser, tweet_id: idTweet })
      } else {
        await deleteData?.({ user_id: idUser, tweet_id: idTweet })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={`flex items-center gap-x-1 group/effect ${optimistic.isActive ? textColor : 'text-zinc-600'}`}>
      <Button
        onPress={handleSendData}
        className={`bg-transparent px-0 min-w-fit overflow-visible ${className} ${optimistic.isActive ? 'text-current first:fill-current first:stroke-current' : 'text-current first:fill-none first:stroke-current'}`}
      >
        {icon}
      </Button>
      {quantity !== undefined &&
        <NumberFlow
          className={`text-small transition-colors duration-300 ease-in-out ${optimistic.isActive ? 'text-current' : 'text-zinc-600'} ${groupHoverClass} `}
          value={optimistic.count}
        />}
    </div>
  )
}

export default ButtonInteraction
