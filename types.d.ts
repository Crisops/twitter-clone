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