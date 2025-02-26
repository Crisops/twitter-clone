import { create } from 'zustand'
import type { StoreCreateTweet, StoreAuth, StoreEditProfileFiles } from '@/types/store'
import { initialCreateTweetForm, initialFormAuth, initialFormEditProfileFiles } from '@/config/fields-form'

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

export const useEditProfile = create<StoreEditProfileFiles>((set) => ({
  initialForm: initialFormEditProfileFiles,
  setFormEditProfileFiles: (update) =>
    set((state) => ({
      initialForm: {
        ...state.initialForm,
        ...(typeof update === 'function' ? update(state.initialForm) : update)
      }
    }))
}))
