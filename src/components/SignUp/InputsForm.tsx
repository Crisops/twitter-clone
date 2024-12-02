import { ChangeEvent, useId } from "react"
import { InputForm } from "../shared/InputForm"
import { useCreateNewAccount } from "@/hooks/useLogin"


export const InputsForm = () => {


    const idNameUser = useId()
    const idEmailUser = useId()

    const {initialForm, setInitialForm} = useCreateNewAccount(state => state)

    

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInitialForm({...initialForm, [e.target.name]: e.target.value})
    }

  return (
    <>
        <InputForm
        id={idNameUser}
        label="Nombre"
        type="text"
        name="fullName"
        activeAnimation
        value={initialForm.fullName}
        handleOnChange={handleOnChange}
        />
        <InputForm
        id={idEmailUser}
        label="Correo electrónico"
        type="text"
        name="email"
        activeAnimation
        value={initialForm.email}
        handleOnChange={handleOnChange}
        />
    </>
  )
}
