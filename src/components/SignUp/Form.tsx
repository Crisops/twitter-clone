'use client'

import { useCreateNewAccount } from "@/hooks/useAuth"
import { InputForm } from "../shared/InputForm"
import { ChangeEvent, useId, useState } from "react"
import { IconEye, IconEyeOff } from "@tabler/icons-react"


export const Form = () => {
    
    const [view, setView] = useState<boolean>(false)
    const {initialForm, setInitialForm} = useCreateNewAccount(state => state)
    const idUserName = useId()
    const idPasswordUser = useId()
    
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInitialForm({...initialForm, [e.target.name]: e.target.value})
    }

    
    const handleViewPassword = () => {
        setView(!view)
    }



    return (
        <div className="flex items-center flex-col w-full h-[calc(100%-4rem)]">
            <div className="flex flex-col max-w-xl w-full h-full">
                <div className="my-7">
                    <h1 className="text-4xl text-white font-semibold">Crea tu cuenta</h1>
                </div>
                <form className="flex flex-col w-full h-full">
                <InputForm
                id={idUserName}
                label="Nombre de usuario"
                type="text"
                name="username"
                activeAnimation
                value={initialForm.username}
                handleOnChange={handleOnChange}
                />
                <InputForm
                id={idPasswordUser}
                label="Contraseña"
                type="password"
                name="password"
                activeAnimation
                value={initialForm.password}
                handleOnChange={handleOnChange}
                handleViewPassword={handleViewPassword}
                viewPassword={view}
                IconSvg={view ? <IconEyeOff color="white" size={35}/> : <IconEye color="white" size={35}/>}
                />
                </form>
                <div className="mb-10">
                    <div>
                        <button type="button" className="text-black text-xl w-full rounded-full font-bold bg-white p-4 hover:bg-white/90">Crear cuenta</button>
                    </div>
                </div>
            </div>
        </div>
    )
}