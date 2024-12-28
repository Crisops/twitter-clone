import { type FormCreateTweet } from '@/types/store'
import { type RegisterOptions } from 'react-hook-form'

export const validationRulesTweet: Partial<Record<keyof FormCreateTweet, RegisterOptions<FormCreateTweet>>> = {
  content: {
    maxLength: {
      value: 280,
      message: 'El tweet debe tener entre 1 y 280 caracteres.'
    }
  }
}
