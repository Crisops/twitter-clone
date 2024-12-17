'use client'

import { useCreateNewAccount } from "@/hooks/useStore"
import { InputForm } from "@/components/shared/InputForm"
import { useEffect, useId, useState } from "react"
import { IconEye, IconEyeOff } from "@tabler/icons-react"
import { useFormAuthSignUp } from "@/hooks/useFormAuthSignUp"


export const Form = () => {
    
    const idUserName = useId()
    const idPassword = useId()
    const {initialForm, setInitialForm} = useCreateNewAccount(state => state)
    
    const [view, setView] = useState<boolean>(false)

    const {registerField, watch, handleSubmit, errors} = useFormAuthSignUp()

    useEffect(() => {
      
        const {unsubscribe} = watch(({username, password}) => {
            if(username && password) setInitialForm({...initialForm, username, password})
        })
    
      return () => unsubscribe()
    }, [watch, initialForm, setInitialForm])
    
    const handleViewPassword = () => {
        setView(!view)
    }

    const handleOnSubmit = handleSubmit(() => {
        console.log(initialForm);
        
    }) 

    return (
        <div className="flex items-center flex-col w-full h-[calc(100%-4rem)]">
            <div className="flex flex-col max-w-xl w-full h-full">
                <div className="my-7">
                    <h1 className="text-4xl text-white font-semibold">Crea tu cuenta</h1>
                </div>
                <form onSubmit={handleOnSubmit} className="flex flex-col w-full h-full">
                    <InputForm
                    id={idUserName}
                    label="Nombre de usuario"
                    type="text"
                    errorMessage={errors.username?.message}
                    handleInputRegister={{...registerField("username")}}
                    valueInput={watch("username")}
                    />
                    <InputForm
                        id={idPassword}
                        type={view ? 'text' : 'password'}
                        valueInput={watch("password")}
                        label="Contraseña"
                        handleInputRegister={{...registerField("password")}}
                        errorMessage={errors.password?.message}
                        IconSvg={view ? <IconEyeOff color="white" size={35}/>  : <IconEye color="white" size={35}/>}
                        handleViewPassword={handleViewPassword}
                        autoComplete="on"
                    />
                    <div className="flex mb-10 h-full">
                        <div className="flex-grow self-end">
                            <button type="submit" className="text-black text-xl w-full rounded-full font-bold bg-white p-4 hover:bg-white/90">Crear cuenta</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}