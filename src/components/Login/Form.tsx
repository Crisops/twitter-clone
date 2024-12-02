'use client'

import { useState } from "react"
import {DataContainerForm} from "./DataContainerForm"
import { HeaderForm } from "../shared/HeaderForm"
import { FormLogin } from "./FormLogin"




export const Form = () => {

    const [nextData, setNextData] = useState<boolean>(false)

    const handleNextConfirmData = () => {
        setNextData(true)
    }

    return (
        <div className="relative w-full h-full">
            <HeaderForm/>
            {
                !nextData ? <DataContainerForm handleNextConfirmData={handleNextConfirmData}/> : <FormLogin/>
            }
        </div>
    )
}