import { ChangeEvent, useId, useState } from "react"
import { useStoreInputCredentials } from "@/hooks/useLogin"
import Link from "next/link"
import { InputForm } from "../shared/InputForm"
import { IconEye, IconEyeOff } from "@tabler/icons-react"

export const FormLogin = () => {

    const idInputUser = useId()
    const idInputPassword = useId()
    const {initialForm, setInitialForm} = useStoreInputCredentials(state => state)

    const [view, setView] = useState<boolean>(false)


    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setInitialForm({...initialForm, [e.target.name]: value})
    }

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
                    {/* <InputForm
                     id={idInputUser} 
                     label="Correo electrónico"
                     name="email"
                     type="text"
                     value={initialForm.email.toLocaleLowerCase()}
                     disabled
                    /> */}
                    {/* <InputForm
                     id={idInputPassword} 
                     label="Contraseña"
                     name="password"
                     type="password"
                     activeAnimation
                     value={initialForm.password}
                     handleOnChange={handleOnChange}
                     viewPassword={view}
                     handleViewPassword={handleViewPassword}
                     IconSvg={view ? <IconEyeOff color="white" size={35}/> : <IconEye color="white" size={35}/> }
                    /> */}
                </form>
                <div className="mb-10">
                    <div>
                        <button type="submit" className="text-black text-xl w-full rounded-full font-bold bg-white p-4 hover:bg-white/90">Iniciar sesión</button>
                    </div>
                    <div className="mt-5">
                        <p className="text-lg text-zinc-500">¿No tienes una cuenta? <Link href={'/signup'} className="text-sky-500 hover:underline">Regístrate</Link></p>
                    </div>
                </div>
          </div>
      </div>
    )
  }