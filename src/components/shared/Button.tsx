import { forwardRef } from 'react'
import { Button as ButtonHero, ButtonProps } from '@heroui/button'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...rest }, ref) => {
  return (
    <ButtonHero ref={ref} {...rest}>
      {children}
    </ButtonHero>
  )
})

Button.displayName = 'Button'

export default Button
