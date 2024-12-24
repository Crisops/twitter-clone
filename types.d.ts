import { Tables } from "@/types/database.types"

type FormLogin = {
    email: string
    password: string
}

type Birthday = {
    day: string
    month: string
    year: string
}

type NewAccountForm = {
    fullName: string
    username: string
    email: string
    password: string
    birthday: Birthday
}

type LinksAsideNavHome = {
    href: string,
    icon: JSX.Element
    text: string
}

type TweetInfo = {
    id: Tables<"tweets">["id"]
    content: Tables<"tweets">["content"]
    image_url: Tables<"tweets">["image_url"]
    likes: Tables<"tweets">["likes"]
    retuits: Tables<"tweets">["retuits"]
    comments: Tables<"tweets">["comments"]
    created_at: Tables<"tweets">["created_at"]
    creator: {
        name: Tables<'users'>['name']; 
        username: Tables<'users'>['username']; 
        avatar_url: Tables<'users'>['avatar_url'];
    } | null
}



type Store = {
    initialForm: FormLogin
    setInitialForm: (form: FormLogin) => void
}

  
type StoreNewAccountForm = {
    initialForm: NewAccountForm
    setInitialForm: (form: NewAccountForm) => void
}



type StoreImageTweet = {
    imageTweet: null | string // Url Image Tweet
    setImageTweet: (image: string) => void
}