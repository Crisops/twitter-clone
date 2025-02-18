import { Tables } from '@/types/database.types'

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

export type FormEditProfile = {
    name: Tables<'users'>['name']
    banner_url: Tables<'users'>['banner_url']
    avatar_url: Tables<'users'>['avatar_url']
    biography: Tables<'users'>['biography']
    location: Tables<'users'>['location']
    web_site: Tables<'users'>['web_site']
}

export type StoreAuth = {
    initialForm: FormLogin & FormSignUp
    setFormAuth: (form: FormLogin & FormSignUp) => void
}

export type StoreCreateTweet = {
    initialForm: FormCreateTweet
    setFormCreateTweet: (tweet: FormCreateTweet) => void
}

export type StoreEditProfile = {
    initialForm: FormEditProfile
    setFormEditProfile: (formEdit: FormEditProfile) => void
}
