'use client'

import { useState } from "react";
import { HeaderForm } from "@/components/shared/HeaderFormAuth";
import { Form } from "./Form";
import { DataCredentialsForm } from "./DataCredentialsForm";

export default function FormSingUp (){

   
    const [nextData, setNextData] = useState<boolean>(false)

    const handleNextData = () => {
        setNextData(true)
    }



    return (
        <div className="relative w-full h-full">
            <HeaderForm/>
            {
                !nextData ? <DataCredentialsForm handleNextData={handleNextData}/> : <Form/>
            }
        </div>
    )
}