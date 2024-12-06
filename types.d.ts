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

type Store = {
    initialForm: FormLogin
    setInitialForm: (form: FormLogin) => void
}

  
type StoreNewAccountForm = {
    initialForm: NewAccountForm
    setInitialForm: (form: NewAccountForm) => void
}

type LinksAsideNavHome = {
    href: string,
    icon: JSX.Element
    text: string
}