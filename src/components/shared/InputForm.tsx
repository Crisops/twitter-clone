import { InputHTMLAttributes, ReactNode } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    errorMessage?: string
    valueInput: string
    handleInputRegister?: UseFormRegisterReturn
    IconSvg?: ReactNode
    handleViewPassword?: () => void
}

export function InputForm ({ id, label, errorMessage, valueInput, handleInputRegister, IconSvg, handleViewPassword, ...rest }: InputFormProps) {
  const value = valueInput ?? ''

  const HandlErrorAndCaracteresSpan = !errorMessage && value?.length > 0
    ? 'text-sky-500 top-0 left-2 text-sm'
    : (errorMessage && value?.length > 0)
        ? 'text-red-500 top-0 left-2 text-sm group-focus-within:text-sm'
        : (errorMessage && value?.length === 0)
            ? 'top-1/2 left-2 text-red-500 group-focus-within:top-0 group-focus-within:left-2 group-focus-within:text-sm text-base'
            : 'text-zinc-500 top-1/2 left-2 text-base group-focus-within:text-sky-500 group-focus-within:top-0 group-focus-within:left-2 group-focus-within:text-sm'

  const HandlErrorAndCaracteresInput = errorMessage && value?.length > 0
    ? 'ring-red-500 focus:ring-red-500'
    : (errorMessage && value?.length === 0)
        ? 'ring-red-500 focus:ring-red-500'
        : (!errorMessage && value?.length > 0)
            ? 'ring-sky-500'
            : 'ring-zinc-500 focus:ring-sky-500'

  const disabledActiveInput = 'disabled:bg-[#202327]/50 disabled:ring-[#202327] disabled:text-zinc-500 peer'
  const disabledActiveSpan = 'peer-disabled:top-0 peer-disabled:bg-[#101214] peer-disabled:text-base peer-disabled:px-1'

  return (
    <div className='relative first-of-type:mb-9 mb-9'>
      <div className='relative w-full h-14 group'>
        <label htmlFor={id} className='absolute w-full h-full left-0'>
          <input
            id={id}
            className={`absolute ${HandlErrorAndCaracteresInput} top-0  left-0 w-full h-full text-white text-base bg-transparent ring-1 outline-none rounded-sm focus:border-none ${disabledActiveInput} ${IconSvg ? 'pl-3 pr-14' : 'px-3'}`}
            {...handleInputRegister}
            {...rest}
          />
          <span className={`absolute ${HandlErrorAndCaracteresSpan} bg-black -translate-y-1/2 transition-all ease-in-out duration-200 pointer-events-none ${disabledActiveSpan} z-10`}>{label}</span>
        </label>
        {IconSvg && <button type='button' onClick={handleViewPassword} className='absolute right-2 bottom-4'>{IconSvg}</button>}
      </div>
      {errorMessage && <p className='absolute -bottom-5 left-0 text-sm text-red-600 font-medium peer'>{errorMessage}</p>}
    </div>
  )
}
