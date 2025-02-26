import type { FormCreateTweet, FormEditProfileFiles, FormEditProfileUser, FormLogin, FormSignUp } from '@/types/store'

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

export const initialFormAuth: FormLogin & FormSignUp = {
  ...initialLoginForm,
  ...initialSignUpForm
}

export const initialCreateTweetForm: FormCreateTweet = {
  content: '',
  file: null,
  imageUrlPreview: null,
  user_id: ''
}

export const initialFormEditProfile: FormEditProfileUser = {
  name: '',
  avatar_url: '',
  banner_url: '',
  biography: '',
  location: '',
  web_site: ''
}

export const initialFormEditProfileFiles: FormEditProfileFiles = {
  avatar_url: null,
  banner_url: null
}
