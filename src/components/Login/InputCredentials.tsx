
// import { useFormAuthLogin } from "@/hooks/useFormAuthLogin"
// import { useStoreInputCredentials } from "@/hooks/useLogin"
// import { useEffect, useId } from "react"
import { UseFormRegisterReturn } from "react-hook-form"


interface InputCredentialsProps {
    id: string
    errorMessage?: string
    value: string
    handleInput: UseFormRegisterReturn
}


export function InputCredentials ({id,errorMessage, value, handleInput}: InputCredentialsProps) {
    

    return (
        <div className="relative mb-9">
            <div className="relative w-full h-16 mb-6 group">
                <label htmlFor={id} className="absolute w-full h-full left-0">
                    <span className={`absolute ${value?.length > 0 ? 'top-0 left-2 group-focus-within:text-base' : 'top-1/2 left-2'} ${errorMessage  ? 'text-red-500 group-focus-within:text-red-500 top-0 left-2' : value?.length > 0 ? 'text-sky-500 text-base' : 'text-zinc-500' } bg-black -translate-y-1/2 text-xl group-focus-within:top-0 group-focus-within:left-2 group-focus-within:text-sky-500 group-focus-within:text-base transition-all ease-in-out duration-200 pointer-events-none z-10 `}>Correo electrónico</span>
                    <input 
                    id={id}
                    type="text" 
                    className={`absolute ${errorMessage ? 'ring-red-500 focus:ring-red-500' : value?.length > 0 ? 'ring-sky-500' : 'ring-zinc-500' } top-0 px-3 left-0 w-full h-full text-white text-xl bg-transparent ring-1 outline-none rounded-sm focus:ring-1 focus:ring-sky-500 focus:border-none`}
                    {...handleInput}
                    />
                </label>
            </div>
            {errorMessage && <p className="absolute -bottom-5 left-0 text-sm text-red-600 font-medium peer">{errorMessage}</p>}
        </div>
    )
}