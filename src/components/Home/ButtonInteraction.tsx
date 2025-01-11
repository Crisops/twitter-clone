import { Tables } from '@/types/database.types'
import { ReactNode } from 'react'

interface ButtonInteractionProps {
    idTweet: Tables<'tweets'>['id']
    icon: ReactNode
    textColor: string
    status: boolean
    handleSendData: (id: Tables<'tweets'>['id']) => Promise<void>
}

function ButtonInteraction ({ idTweet, icon, status, textColor, handleSendData }:ButtonInteractionProps) {
  return (
    <button onClick={() => handleSendData(idTweet)} className='w-full h-full'>
      <div className={`${status ? `first:fill-pink-600 first:stroke-pink-600 ${textColor}` : 'first:fill-none first:stroke-zinc-600 text-zinc-600'}`}>
        {icon}
      </div>
    </button>
  )
}

export default ButtonInteraction
