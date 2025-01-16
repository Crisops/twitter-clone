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
    imageUrlPreview: string | null
    file: File | null
    user_id: string
}

export type StoreAuth = {
    initialForm: FormLogin & FormSignUp
    setFormAuth: (form: FormLogin & FormSignUp) => void
}

export type StoreCreateTweet = {
    initialForm: FormCreateTweet
    setFormCreateTweet: (tweet: FormCreateTweet) => void
}
