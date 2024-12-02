
import { ChangeEvent } from "react"

interface InputFormProps {
    id: string
    label: string
    name: string
    type: "text" | "password"
    value: string
    activeAnimation?: boolean
    disabled?: boolean
    viewPassword?: boolean
    handleOnChange?: (e: ChangeEvent<HTMLInputElement>) => void
    handleViewPassword?: () => void
    IconSvg?: JSX.Element
}

export const InputForm = (
    {id, label, name, type, value, activeAnimation, disabled, viewPassword, handleOnChange, handleViewPassword, IconSvg 
        
    }: InputFormProps) => {

    const classNameSpan = (name !== "user" && value.length > 0)
     ? 'text-sky-500 text-base top-0 left-2 bg-black -translate-y-1/2'
    : 'text-base top-0 left-2 text-zinc-700 text-base' 

    const classNameLabel = (name !== "user" && value.length > 0) ? 'ring-sky-500' : 'ring-[#20232780]'

    return (
        <div className={`relative w-full h-[72px] mb-6 ${activeAnimation ? 'group' : 'bg-[#202327]/50'}`}>
            <label htmlFor={id} className={`absolute w-full h-full left-0 ${classNameLabel} ring-1`}>
                <span className={`absolute ${classNameSpan} pointer-events-none transition-all ease-in-out duration-200`}>{label}</span>
                <input
                id={id}
                className={`absolute top-0 pl-2 pr-16 mt-2 left-0 w-full h-full ${activeAnimation ? 'text-white' : 'text-zinc-700'} text-xl bg-transparent outline-none rounded-sm`}
                type={viewPassword ? 'text' : type}
                name={name} 
                value={value}
                disabled={disabled}
                onChange={handleOnChange}
                autoComplete="off"
                />
            </label>
            {IconSvg && <button type="button" onClick={handleViewPassword} className="absolute right-2 bottom-4">{IconSvg}</button>}
        </div>
    )
}