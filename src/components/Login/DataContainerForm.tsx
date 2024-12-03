'use client'

import Link from "next/link"
import { ButtonGoogle } from "../shared/ButtonGoogle"
import { InputForm } from "@/components/shared/InputForm"
import { useFormAuthLogin } from "@/hooks/useFormAuthLogin"
import { useLogin } from "@/hooks/useAuth"
import { useEffect, useId } from "react"

interface DataContainerFormProps {
    handleNextConfirmData: () => void
}

export const DataContainerForm = ({handleNextConfirmData}: DataContainerFormProps) => {

    const idEmail = useId()
    const {registerField, watch, errors} = useFormAuthLogin()
    const {initialForm, setInitialForm} = useLogin(state => state)

    const email = watch("email")
    
    useEffect(() => {

        const {unsubscribe} = watch(({email}) => {
            if(email) setInitialForm({...initialForm, email})
        })

        return () => unsubscribe()

    }, [watch, initialForm, setInitialForm])


    

  return (
    <div className="flex items-center flex-col w-full">
        <div className="w-[400px]">
            <div className="my-6">
                <h1 className="text-4xl text-white font-bold">Inicia sesión en X</h1>
            </div>
            <form className="flex flex-col w-full">
                <ButtonGoogle textContent="Iniciar sesión con Google"/>
            </form>
            <div className="flex items-center gap-3 my-3">
                <div className="w-full h-px bg-zinc-700"></div>
                <div className="text-white">O</div>
                <div className="w-full h-px bg-zinc-700"></div>
            </div>
            <InputForm
            id={idEmail}
            type="email"
            label="Correo electrónico"
            handleInputRegister={{...registerField("email")}}
            errorMessage={errors.email?.message}
            valueInput={email}
            />
            <div className="bg-white rounded-full mb-6">
                <button onClick={handleNextConfirmData} className={`${(errors.email?.message || !email) && 'pointer-events-none'} text-black text-center w-full p-3 font-bold text-lg`}>Siguiente</button>
            </div>
            <div>
                <p className="text-lg text-zinc-500">¿No tienes una cuenta? <Link href={'/signup'} className="text-sky-500 hover:underline">Regístrate</Link></p>
            </div>
        </div>
    </div>
  )
}
