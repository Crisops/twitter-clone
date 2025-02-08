import React, { ForwardRefExoticComponent, RefAttributes } from 'react'
import { Icon, IconProps } from '@tabler/icons-react'
import { Button } from '@heroui/react'

interface ButtonOptionPostProps {
  textColor: string
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>
  handleOptionAction: () => void
  action: string
}

export default function ButtonOptionPost ({ textColor, Icon, handleOptionAction, action }: ButtonOptionPostProps) {
  return (
    <Button
      className={`${textColor} w-full justify-start rounded-none data-[hover=true]:bg-default-50/30 font-medium`}
      onPress={handleOptionAction}
      variant='light'
      startContent={<Icon size={20} color='currentColor' />}
    >
      {action}
    </Button>
  )
}
