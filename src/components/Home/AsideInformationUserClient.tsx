'use client'

import { useState } from "react";
import { IconDots } from "@tabler/icons-react";
import SignOutUser from "./SignOutUser";
import {useRouter} from 'next/navigation'

type AsideInformationUserProps = {
    name: string
    username: string
    children: React.ReactNode
}

export default function AsideInformationUserClient({name, username, children: imageUser}: AsideInformationUserProps) {

    const router = useRouter()

    const [view, setView] = useState<boolean>(false)
    const handleViewSignOut = () => {
        setView(!view)
        router.push("/")
    }

  return (
    <div onClick={handleViewSignOut} role="button" className="relative top-0 left-0 py-3 pl-1">
        <div className="flex items-center justify-between pl-2 py-2 pr-2 rounded-full cursor-pointer transition-colors duration-150 hover:bg-white/10">
            <div className="flex items-center">
                { imageUser }
                <div className="ml-3">
                    <div className="flex flex-col justify-between">
                        <h4 className="text-white font-medium text-base">{name}</h4>
                        <span className="text-zinc-500 text-base font-normal">@{username}</span>
                    </div>
                </div>
            </div>
            <div>
                <IconDots size={20} color="white"/>
            </div>
        </div>
        { view && <SignOutUser username={username}/>}          
    </div>
  )
}
