'use client'

import { IconX } from '@tabler/icons-react'
import { IconTwitter } from '../Icons'
import { useRouter } from 'next/navigation'
import { useCreateNewAccount, useLogin } from '@/hooks/useStore'


export const HeaderFormAuth = () => {

    const {setInitialForm} = useLogin(state => state)
    const {setInitialForm: setNewAccountForm} = useCreateNewAccount(state => state)

    const router = useRouter()
    const handleNavigationHome = () => {
        
        const initialFormChooseAccount = { email: "", password: ""}
        const initialFormNewAccount = {fullName: "", username:"", email: "", password:"", birthday: { day: "", month: "", year: ""} }
        setInitialForm(initialFormChooseAccount)
        setNewAccountForm(initialFormNewAccount)
        router.push('/')
    }

    return (
        <div className="relative w-full p-2 h-14 flex justify-center items-center">
            <div className='flex-grow basis-0'>
                <button onClick={handleNavigationHome}  className='hover:bg-white/10 transition-colors ease-in duration-150 rounded-full p-1'>
                    <IconX size={20} color='#fff'/>
                </button>
            </div>
            <div className='flex-grow'>
                <IconTwitter size="size-8"/>
            </div>
        </div>
    )
}