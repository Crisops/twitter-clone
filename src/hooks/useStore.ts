import { initialCreateTweetForm, initialLoginForm, initialSignUpForm } from '@/config/fields-form'
import type { StoreSignUp, StoreCreateTweet, StoreLogin } from '@/types/store'
import { create } from 'zustand'

export const useLogin = create<StoreLogin>()((set) => ({
  initialForm: initialLoginForm,
  setFormLogin: (initialForm) => set(() => ({ initialForm }))
}))

export const useSignUp = create<StoreSignUp>((set) => ({
  initialForm: initialSignUpForm,
  setFormSignUp: (initialForm) => set(() => ({ initialForm }))
}))

export const useCreateTweet = create<StoreCreateTweet>((set) => ({
  initialForm: initialCreateTweetForm,
  setFormCreateTweet: (initialForm) => set(() => ({ initialForm }))
}))
