import { Button as ButtonHero, ButtonProps } from '@heroui/button'

export default function Button ({ children, ...rest }: ButtonProps) {
  return (
    <ButtonHero {...rest}>
      {children}
    </ButtonHero>
  )
}
