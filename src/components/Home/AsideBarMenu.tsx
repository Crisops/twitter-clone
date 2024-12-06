import Image from "next/image";
import { IconTwitter } from "../Icons";
import { IconDots } from "@tabler/icons-react";
import AsideNavigation from "./AsideNavigation";

export default function AsideBarMenu() {
  return (
    <aside className="sticky top-0 h-screen border-r-1 border-zinc-900">
        <div className="h-full px-2">
            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col w-full h-full">
                    <header className="py-4 pl-4">
                        <IconTwitter size="size-[2.5rem]"/>
                    </header>
                    <div className="h-full">
                        <div className="pl-2 h-full">
                            <AsideNavigation/>
                        </div>
                    </div>
                </div>
                <div className="py-5 pl-2">
                    <div className="flex items-center justify-between p-3 rounded-full cursor-pointer transition-colors duration-150 hover:bg-white/10">
                        <div className="flex items-center">
                            <div>
                                <Image className="rounded-full" src="https://pbs.twimg.com/profile_images/1841249485810245632/0VcVbOE8_normal.jpg" width={50} height={50} alt="Nombre de usuario"/>
                            </div>
                            <div className="ml-4">
                                <div className="flex flex-col justify-between">
                                    <h4 className="text-white font-medium text-xl">Alejandro Pérez</h4>
                                    <span className="text-zinc-500 text-xl font-normal">@CrisopsDev</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <IconDots size={25} color="white"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </aside>
  )
}
