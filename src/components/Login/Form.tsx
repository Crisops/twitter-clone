'use client'

import { useState } from "react"
import {DataContainerForm} from "./DataContainerForm"
import { HeaderFormAuth } from "../shared/HeaderFormAuth"
import { FormLogin } from "./FormLogin"




export const Form = () => {

    const [nextData, setNextData] = useState<boolean>(false)

    const handleNextConfirmData = () => {
        setNextData(true)
    }

    return (
        <div className="relative w-full h-full">
            <HeaderFormAuth/>
            {
                !nextData ? <DataContainerForm handleNextConfirmData={handleNextConfirmData}/> : <FormLogin/>
            }
        </div>
    )
}