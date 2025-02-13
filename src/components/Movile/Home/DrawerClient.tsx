'use client'

import { Children, ReactNode } from 'react'
import { Drawer, DrawerContent, DrawerBody, Button, useDisclosure } from '@heroui/react'
import { useSearchContext } from '@/hooks/useSearchContext'

interface DrawerHeaderClientProps {
  children: ReactNode[]
}

function DrawerClient ({ children }: DrawerHeaderClientProps) {
  const [drawerHeader, asideNavigation, avatarUser] = Children.toArray(children)

  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const { open } = useSearchContext()

  return (
    <>
      <Button isIconOnly variant='bordered' className={`border-none self-start ${open ? 'hidden' : 'inline-flex'}`} onPress={onOpen}>
        {avatarUser}
      </Button>
      <Drawer
        hideCloseButton
        size='xs'
        isOpen={isOpen}
        placement='left'
        onOpenChange={onOpenChange}
        classNames={{ wrapper: 'w-3/4', base: 'bg-black rounded-none shadow-[0px_10px_10px_#fff]', backdrop: 'bg-[#5b708366]', body: 'px-0' }}
      >
        <DrawerContent>
          <>
            {drawerHeader}
            <DrawerBody>
              {asideNavigation}
            </DrawerBody>
          </>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerClient
