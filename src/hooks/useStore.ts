import { initialCreateTweetForm, initialFormAuth } from '@/config/fields-form'
import type { StoreCreateTweet, StoreAuth } from '@/types/store'
import { create } from 'zustand'

export const useAuth = create<StoreAuth>()((set) => ({
  initialForm: initialFormAuth,
  setFormLogin: (initialForm) => set(() => ({ initialForm }))
}))

export const useCreateTweet = create<StoreCreateTweet>((set) => ({
  initialForm: initialCreateTweetForm,
  setFormCreateTweet: (initialForm) => set(() => ({ initialForm }))
}))
