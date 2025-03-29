import { forwardRef } from 'react'
import { Input as InputHero, InputProps } from '@heroui/react'

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <InputHero ref={ref} {...props} />
  )
})

Input.displayName = 'Input'

export default Input
