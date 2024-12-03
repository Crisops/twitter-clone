import { useId, useState, useEffect } from "react"
import { useStoreInputCredentials } from "@/hooks/useLogin"
import Link from "next/link"
import { InputCredentials } from "./InputCredentials"
import { useFormAuthLogin } from "@/hooks/useFormAuthLogin"
import { IconEye, IconEyeOff } from "@tabler/icons-react"

export const FormLogin = () => {

    const idEmail = useId()
    const idPassword = useId()

    const {registerField, watch, errors} = useFormAuthLogin()

    const password = watch("password")

    const {initialForm, setInitialForm} = useStoreInputCredentials(state => state)

    useEffect(() => {

        const {unsubscribe} = watch(({password}) => {
            if(password) setInitialForm({...initialForm, password})
        }) 

        return () => unsubscribe()

    }, [watch, initialForm, setInitialForm])

    const [view, setView] = useState<boolean>(false)

    const handleViewPassword = () => {
        setView(!view)
    }

    return (
      <div className="flex items-center flex-col w-full h-[calc(100%-4rem)]">
          <div className="flex flex-col max-w-xl w-full h-full">
              <div className="my-7">
                  <h1 className="text-4xl text-white font-semibold">Introduce tu contraseña</h1>
              </div>
              <form className="flex flex-col w-full h-full">
                <InputCredentials
                    id={idEmail}
                    name="email"
                    defaultValue={initialForm.email?.toLocaleLowerCase()}
                    type="email"
                    valueInput=""
                    disabled
                />
                <InputCredentials
                    id={idPassword}
                    type={view ? 'text' : 'password'}
                    valueInput={password}
                    handleInputRegister={{...registerField("password")}}
                    errorMessage={errors.password?.message}
                    IconSvg={view ? <IconEyeOff color="white" size={35}/>  : <IconEye color="white" size={35}/>}
                    handleViewPassword={handleViewPassword}
                />
                </form>
                <div className="mb-10">
                    <div>
                        <button type="submit" className={`text-black text-xl w-full rounded-full font-bold bg-white p-4 hover:bg-white/90 ${errors.password?.message || initialForm.password === '' ? 'cursor-not-allowed' : 'cursor-pointer'}`}>Iniciar sesión</button>
                    </div>
                    <div className="mt-5">
                        <p className="text-lg text-zinc-500">¿No tienes una cuenta? <Link href={'/signup'} className="text-sky-500 hover:underline">Regístrate</Link></p>
                    </div>
                </div>
          </div>
      </div>
    )
  }