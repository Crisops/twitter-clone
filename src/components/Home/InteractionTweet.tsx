'use client'

import { ReactNode, useEffect, useState } from 'react'
import NumberFlow from '@number-flow/react'
import { Tables } from '@/types/database.types'
import ButtonInteraction from './ButtonInteraction'

type DataParametersProps = {
  user_id: Tables<'users'>['id']
  tweet_id: Tables<'tweets'>['id']
}
interface InteractionsTweetProps {
  idUser: Tables<'users'>['id']
  idTweet: Tables<'tweets'>['id']
  icon: ReactNode
  bgColor: string
  textColor: string
  textColorHover: string
  quantity?: Tables<'tweets'>['comments'] | Tables<'tweets'>['retuits'] | Tables<'tweets'>['likes']
  data?: Tables<'retuits'>[] | Tables<'likes'>[]
  insertData?: ({ user_id, tweet_id }: DataParametersProps) => Promise<void>
  deleteData?: ({ user_id, tweet_id }: DataParametersProps) => Promise<void>
}

export default function InteractionTweet (
  {
    idUser,
    idTweet,
    icon,
    bgColor,
    textColor,
    textColorHover,
    quantity,
    data,
    insertData,
    deleteData
  }: InteractionsTweetProps
) {
  const [value, setValue] = useState<number>(quantity ?? 0)
  const [status, setStatus] = useState<boolean>(false)

  useEffect(() => {
    const validate = data?.some((item) => item.user_id === idUser && item.tweet_id === idTweet) ?? false
    setStatus(validate)
  }, [data, idUser, idTweet])

  const handleSendData = async (id: Tables<'tweets'>['id']) => {
    if (!status) {
      setValue(value + 1)
      setStatus(true)
      await insertData?.({ user_id: idUser, tweet_id: id })
      return
    }
    setValue(value - 1)
    setStatus(false)
    await deleteData?.({ user_id: idUser, tweet_id: id })
  }

  return (
    <div className='flex flew-grow items-center gap-x-1 group cursor-pointer'>
      <div className={`relative flex items-center before:absolute before:-inset-2 before:rounded-full before:transition-colors before:duration-300 before:ease-in-out ${bgColor} before:pointer-events-none`}>
        <ButtonInteraction
          idTweet={idTweet}
          icon={icon}
          textColor={textColor}
          status={status}
          handleSendData={handleSendData}
        />
      </div>
      <div>
        {
          quantity?.toString() &&
            <NumberFlow
              className={`text-xs pointer-events-none ${status ? `${textColor}` : 'text-zinc-600'} ${textColorHover} marker:transition-colors duration-300 ease-in-out`}
              value={value ?? 0}
            />
        }
      </div>
    </div>
  )
}
