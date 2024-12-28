export type FormLogin = {
    email: string
    password: string
}

type Birthday = {
    day: string
    month: string
    year: string
}

export type FormSignUp = {
    fullName: string
    username: string
    email: string
    password: string
    birthday: Birthday
}

export type FormCreateTweet = {
    content: string
    imageUrlPreview: string | null // This is a URL Create Object
    file: File | null
    user_id: string
}

export type StoreLogin = {
    initialForm: FormLogin
    setFormLogin: (form: FormLogin) => void
}

export type StoreSignUp = {
    initialForm: FormSignUp
    setFormSignUp: (form: FormSignUp) => void
}

export type StoreCreateTweet = {
    initialForm: FormCreateTweet
    setFormCreateTweet: (tweet: FormCreateTweet) => void
}
