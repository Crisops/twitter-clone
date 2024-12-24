
export type FormLogin = {
    email: string
    password: string
}

type Birthday = {
    day: string
    month: string
    year: string
}

export type NewAccountForm = {
    fullName: string
    username: string
    email: string
    password: string
    birthday: Birthday
}

export type Store = {
    initialForm: FormLogin
    setInitialForm: (form: FormLogin) => void
}

  
export type StoreNewAccountForm = {
    initialForm: NewAccountForm
    setInitialForm: (form: NewAccountForm) => void
}



export type StoreImageTweet = {
    imageTweet: null | string // Url Image Tweet
    setImageTweet: (image: string) => void
}