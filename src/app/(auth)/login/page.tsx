import { SectionForm } from "@/components/Login/SectionForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Iniciar sesión en X Clone / Crisops',
    description: "Inicia sesión con tu cuenta de Twitter y cuentanos que esta pasando!"
}

export default function LoginPage (){
    return (
        <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-sky-800/10 z-50 before:absolute before:inset-0 before:bg-white/10 before:-z-[1]">
            <SectionForm/>
        </div>
    )
}