import type { FormCreateTweet, FormLogin, FormSignUp } from '@/types/store'

export const initialLoginForm: FormLogin = {
  email: '',
  password: ''
}

export const initialSignUpForm: FormSignUp = {
  fullName: '',
  username: '',
  email: '',
  password: '',
  birthday: {
    day: '',
    month: '',
    year: ''
  }
}

export const initialCreateTweetForm: FormCreateTweet = {
  content: '',
  file: null,
  imageUrlPreview: null,
  user_id: ''
}
