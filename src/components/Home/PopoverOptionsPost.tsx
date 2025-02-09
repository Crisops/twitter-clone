'use client'

import { Popover, PopoverContent, PopoverTrigger, Button } from '@heroui/react'
import { IconDots, IconTrash } from '@tabler/icons-react'
import ShowModal from '@/components/shared/ShowModal'
import { useDevice } from '@/hooks/useDevice'
import { useReducerOptionsPost } from '@/hooks/useReducerOptionsPost'
import ButtonOptionPost from './ButtonOptionPost'
import ConfirmDeletePost from './ConfirmDeletePost'

export default function PopoverOptionsPost () {
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
        <PopoverTrigger>
          <Button isIconOnly className='relative flex flew-grow items-center gap-x-1 cursor-pointer bg-transparent text-zinc-500 min-w-9 w-9 h-9 rounded-full data-[hover=true]:bg-sky-500/10 data-[hover=true]:text-sky-500'>
            <IconDots size={20} color='currentColor' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='justify-start bg-black [box-shadow:0px_0px_10px_#ffffff80] px-0 py-0 overflow-hidden w-80 min-h-96'>
          <ButtonOptionPost textColor='text-red-600' Icon={IconTrash} handleOptionAction={() => dispatch({ type: 'OPEN_MODAL' })} action='Eliminar' />
        </PopoverContent>
      </Popover>
      <ShowModal
        isOpen={view.component === 'modal'}
        placement='center'
        size={deviceType === 'mobile' || deviceType === 'tablet' ? 'full' : 'sm'}
        handleClose={handleClose}
        formTweet={<ConfirmDeletePost />}
      />
    </>

  )
}
