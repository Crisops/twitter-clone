'use client'

import { InputsForm } from "./InputsForm"
import { SelectedBirthday } from "./SelectedBirthDay"

interface DataCredentialsFormProps {
    handleNextData: () => void
}

export const DataCredentialsForm = ({handleNextData}: DataCredentialsFormProps) => {

  return (
    <div className="flex items-center flex-col w-full h-[calc(100%-4rem)]">
        <div className="flex flex-col max-w-xl w-full h-full">
            <div className="my-7">
                <h1 className="text-4xl text-white font-semibold">Crea tu cuenta</h1>
            </div>
            <section className="flex flex-col w-full h-full">
                <InputsForm/>
                <div>
                    <h3 className="text-white text-xl font-medium">Fecha de nacimiento</h3>
                    <p className="text-zinc-500 text-lg">Esta información no será pública. Confirma tu propia edad, incluso si esta cuenta es para una empresa, una mascota u otra cosa.</p>
                </div>
                <SelectedBirthday/>
            </section>
            <div className="mb-10">
                <div>
                    <button onClick={handleNextData} type="button" className="text-black text-xl w-full rounded-full font-bold bg-white p-4 hover:bg-white/90">Siguiente</button>
                </div>
            </div>
        </div>
    </div>
  )
}
