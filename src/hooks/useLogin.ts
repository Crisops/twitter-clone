import { create } from 'zustand'



export const useStoreInputCredentials = create<Store>()((set) => ({
  initialForm: { email: "", password: ""},
  setInitialForm: (initialForm) => set(() => ({ initialForm })),
}))

export const useCreateNewAccount = create<StoreNewAccountForm>((set) => ({
  initialForm: {fullName: "", username:"", email: "", password:"", birthday: { day: "", month: "", year: ""} },
  setInitialForm: (initialForm) => set(() => ({ initialForm })),
}))

