'use client'

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure
} from '@nextui-org/react'
import { ReactNode } from 'react'

interface DrawerHeaderClientProps {
  children: ReactNode
}

function DrawerHeaderClient ({ children: avatar }: DrawerHeaderClientProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Button isIconOnly variant='bordered' className='border-none' onPress={onOpen}>
        {avatar}
      </Button>
      <Drawer
        hideCloseButton
        size='xs'
        isOpen={isOpen}
        placement='left'
        onOpenChange={onOpenChange}
        classNames={{ wrapper: 'w-3/4 [box-shadow:0px_10px_5px_#fff]', base: 'bg-black rounded-none', backdrop: 'bg-[#5b708366]' }}
      >
        <DrawerContent>
          <>
            <DrawerHeader className='flex flex-col gap-1'>Información del perfil</DrawerHeader>
            <DrawerBody>
              <p>Aqui van los links</p>
            </DrawerBody>
            <DrawerFooter>
              <p>Description</p>
            </DrawerFooter>
          </>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerHeaderClient
