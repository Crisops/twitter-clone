import { create } from 'zustand'
import type { StoreCreateTweet, StoreAuth, StoreEditProfile } from '@/types/store'
import { initialCreateTweetForm, initialFormAuth, initialFormEditProfile } from '@/config/fields-form'

export const useAuth = create<StoreAuth>()((set) => ({
  initialForm: initialFormAuth,
  setFormAuth: (initialForm) => set(() => ({ initialForm }))
}))

export const useCreateTweet = create<StoreCreateTweet>((set) => ({
  initialForm: initialCreateTweetForm,
  setFormCreateTweet: (initialForm) => set(() => ({ initialForm }))
}))

export const useCreateComposeTweet = create<StoreCreateTweet>((set) => ({
  initialForm: initialCreateTweetForm,
  setFormCreateTweet: (initialForm) => set(() => ({ initialForm }))
}))

export const useEditProfile = create<StoreEditProfile>((set) => ({
  initialForm: initialFormEditProfile,
  setFormEditProfile: (initialForm) => set(() => ({ initialForm }))
}))
