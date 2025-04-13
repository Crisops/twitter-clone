'use client'

import { Popover, PopoverContent, PopoverTrigger } from '@heroui/popover'
import { Tables } from '@/types/database.types'
import { IconDots, IconTrash } from '@tabler/icons-react'
import { useDevice } from '@/hooks/useDevice'
import { useReducerOptionsPost } from '@/hooks/useReducerOptionsPost'
import Button from '@/components/shared/Button'
import ConfirmDeletePost from '@/components/Home/ConfirmDeletePost'
import ShowModal from '@/components/shared/ShowModal'

interface PopoverOptionsPostProps {
  idUserSession: Tables<'users'>['id']
  userId: Tables<'users'>['id']
  tweetId: Tables<'tweets'>['id']
}

export default function PopoverOptionsPost ({ idUserSession, userId, tweetId }: PopoverOptionsPostProps) {
  const { view, dispatch } = useReducerOptionsPost()

  const { deviceType } = useDevice()

  const handleOpenPopover = (isOpen: boolean) => {
    dispatch({ type: isOpen ? 'OPEN_POPOVER' : 'CLOSE' })
  }

  const handleClose = () => {
    dispatch({ type: 'CLOSE' })
  }

  return (
    <>
      <Popover isOpen={view.component === 'popover'} onOpenChange={handleOpenPopover} placement='left-start' offset={-25}>
        <PopoverTrigger className='z-0'>
          <Button isIconOnly className='relative flex flew-grow items-center gap-x-1 cursor-pointer bg-transparent text-zinc-500 min-w-9 w-9 h-9 rounded-full data-[hover=true]:bg-sky-500/10 data-[hover=true]:text-sky-500'>
            <IconDots size={20} color='currentColor' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='justify-start bg-black [box-shadow:0px_0px_10px_#ffffff80] px-0 py-0 overflow-hidden w-80 min-h-96'>
          {
            idUserSession === userId &&
              <Button
                className='w-full justify-start rounded-none data-[hover=true]:bg-default-50/30 font-medium text-red-600'
                variant='light'
                onPress={() => dispatch({ type: 'OPEN_MODAL' })}
                startContent={<IconTrash size={20} color='currentColor' />}
              >
                Eliminar
              </Button>
          }
        </PopoverContent>
      </Popover>
      <ShowModal
        isOpen={view.component === 'modal'}
        placement='center'
        size={deviceType === 'mobile' || deviceType === 'tablet' ? 'full' : 'sm'}
        handleClose={handleClose}
        hideCloseButton
        content={<ConfirmDeletePost tweetId={tweetId} userId={userId} />}
      />
    </>

  )
}
