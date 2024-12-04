'use client'

import { signup } from "@/actions/actions"
import { IconGoogle } from "../Icons"

export const ButtonGoogle = ({textContent}: {textContent: string}) => {

    const handleSignUpGoogleAuth = async () => {
        await signup()
    }

    return (
        <div className="relative bg-white flex items-center justify-center rounded-full gap-4">
            <IconGoogle/>
            <button onClick={handleSignUpGoogleAuth} className="text-lg text-zinc-700 py-3 pr-3 font-medium">{textContent}</button>
        </div>
    )
}