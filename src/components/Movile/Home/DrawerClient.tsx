'use client'

import AsideNavigation from '@/components/Home/AsideNavigation'
import { Drawer, DrawerContent, DrawerBody, DrawerFooter, Button, useDisclosure } from '@nextui-org/react'
import { ReactNode } from 'react'

interface DrawerHeaderClientProps {
  DrawerHeader: ReactNode
  LinkProfile: ReactNode
  children: ReactNode
}

function DrawerClient ({ DrawerHeader, children: avatar, LinkProfile }: DrawerHeaderClientProps) {
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
        classNames={{ wrapper: 'w-3/4', base: 'bg-black rounded-none [box-shadow:0px_10px_10px_#fff]', backdrop: 'bg-[#5b708366]', body: 'px-0' }}
      >
        <DrawerContent>
          <>
            {DrawerHeader}
            <DrawerBody>
              <AsideNavigation viewMovil LinkProfile={LinkProfile} />
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

export default DrawerClient
