import { type RegisterOptions } from 'react-hook-form'
import { type FormCreateTweet } from '@/types/store'

export const validationRulesTweet: Partial<Record<keyof FormCreateTweet, RegisterOptions<FormCreateTweet>>> = {
  content: {
    maxLength: {
      value: 280,
      message: 'El tweet debe tener entre 1 y 280 caracteres.'
    }
  }
}
