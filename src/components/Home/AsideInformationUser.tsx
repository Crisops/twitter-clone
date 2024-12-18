'use client'

import { useState } from "react";
import { IconDots } from "@tabler/icons-react";
import TweetImageUser from "./TweetImageUser";
import SignOutUser from "./SignOutUser";

export default function AsideInformationUser() {

    const [view, setView] = useState<boolean>(false)
    const handleViewSignOut = () => {
        setView(!view)
    }

  return (
    <div onClick={handleViewSignOut} className="relative top-0 left-0 py-3 pl-1">
        <div className="flex items-center justify-between pl-2 py-2 pr-2 rounded-full cursor-pointer transition-colors duration-150 hover:bg-white/10">
            <div className="flex items-center">
                <div>
                <TweetImageUser/>
                </div>
                <div className="ml-3">
                    <div className="flex flex-col justify-between">
                        <h4 className="text-white font-medium text-base">Alejandro Pérez</h4>
                        <span className="text-zinc-500 text-base font-normal">@CrisopsDev</span>
                    </div>
                </div>
            </div>
            <div>
                <IconDots size={20} color="white"/>
            </div>
        </div>
        { view && <SignOutUser/>}          
    </div>
  )
}
