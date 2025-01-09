import { useFormAuth } from '@/hooks/useFormAuth'
import { useAuth } from '@/hooks/useStore'
import { FormAuth } from '@/lib/form-auth'
import { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react'
import { useWatch } from 'react-hook-form'

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  errorMessage?: string
  registerName: keyof FormAuth
  IconSvg?: ReactNode
  handleViewPassword?: () => void
}

export function InputForm ({ id, label, registerName, IconSvg, handleViewPassword, ...rest }: InputFormProps) {
  const { registerField, control, errors, trigger } = useFormAuth()

  const { initialForm, setFormAuth } = useAuth(state => state)

  const { name, ref, onChange, ...restRegister } = registerField(registerName)

  const value = useWatch({ control, name: registerName }) as string

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e)
    trigger(name)
    setFormAuth({ ...initialForm, [name]: e.target.value })
  }

  const HandlErrorAndCaracteresSpan = !errors[registerName]?.message && value?.length > 0
    ? 'text-sky-500 top-0 left-2 text-sm'
    : (errors[registerName]?.message && value?.length > 0)
        ? 'text-red-500 top-0 left-2 text-sm group-focus-within:text-sm'
        : (errors[registerName]?.message && value?.length === 0)
            ? 'top-1/2 left-2 text-red-500 group-focus-within:top-0 group-focus-within:left-2 group-focus-within:text-sm text-base'
            : 'text-zinc-500 top-1/2 left-2 text-base group-focus-within:text-sky-500 group-focus-within:top-0 group-focus-within:left-2 group-focus-within:text-sm'

  const HandlErrorAndCaracteresInput = errors[registerName]?.message && value?.length > 0
    ? 'ring-red-500 focus:ring-red-500'
    : (errors[registerName]?.message && value?.length === 0)
        ? 'ring-red-500 focus:ring-red-500'
        : (!errors[registerName]?.message && value?.length > 0)
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
            onChange={handleOnChange}
            name={name}
            ref={ref}
            className={`absolute ${HandlErrorAndCaracteresInput} top-0  left-0 w-full h-full text-white text-base bg-transparent ring-1 outline-none rounded-sm focus:border-none ${disabledActiveInput} ${IconSvg ? 'pl-3 pr-14' : 'px-3'}`}
            {...restRegister}
            {...rest}
          />
          <span className={`absolute ${HandlErrorAndCaracteresSpan} bg-black -translate-y-1/2 transition-all ease-in-out duration-200 pointer-events-none ${disabledActiveSpan} z-10`}>{label}</span>
        </label>
        {IconSvg && <button type='button' onClick={handleViewPassword} className='absolute right-2 bottom-4'>{IconSvg}</button>}
      </div>
      {errors[registerName] && <p className='absolute -bottom-5 left-0 text-sm text-red-600 font-medium peer'>{errors[registerName].message}</p>}
    </div>
  )
}
