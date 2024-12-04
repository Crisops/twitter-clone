'use client'

import { useState } from "react";
import { HeaderFormAuth } from "@/components/shared/HeaderFormAuth";
import { Form } from "./Form";
import { DataCredentialsForm } from "./DataCredentialsForm";

export default function FormSignUp (){

   
    const [nextData, setNextData] = useState<boolean>(false)

    const handleNextData = () => {
        setNextData(true)
    }



    return (
        <div className="relative w-full h-full">
            <HeaderFormAuth/>
            {
                !nextData ? <DataCredentialsForm handleNextData={handleNextData}/> : <Form/>
            }
        </div>
    )
}