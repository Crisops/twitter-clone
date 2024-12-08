import { IconBell, IconBookmark, IconMail, IconSearch, IconUser, IconWashDryOff } from "@tabler/icons-react"
import { IconBolt, IconHome, IconTwitter, IconUsers } from "../Icons"
import Link from "next/link"


export default function LinksSideNav() {

    const links: LinksAsideNavHome[] = [
        {href: '/home', icon: <IconHome/>, text: 'Inicio'},
        {href: '/explore', icon: <IconSearch size='1.75rem'/>, text: 'Explorar'},
        {href: '/notifications', icon: <IconBell size='1.75rem'/>, text: 'Notificaciones'},
        {href: '/messages', icon: <IconMail size='1.75rem'/>, text: 'Mensajes'},
        {href: '/grok', icon: <IconWashDryOff size='1.75rem'/>, text: 'Grok'},
        {href: '/bookmarks', icon: <IconBookmark size='1.75rem'/>, text: 'Guardados'},
        {href: '/communities', icon: <IconUsers/>, text: 'Comunidades'},
        {href: '/premium_sign_up', icon: <IconTwitter size="size-[1.75rem]"/>, text: 'Premium'},
        {href: '/verified-orgs-signup', icon: <IconBolt/>, text: 'Organizaciones ver'},
        {href: '/profile', icon: <IconUser size='1.75rem'/>, text: 'Perfil'},
    ]

  return (
    <>
        {
            links.map(({href,icon, text}, index) => (
                <li key={index}>
                    <Link href={href} className="w-full">
                        <div className="w-max py-3 pl-1 pr-9 rounded-full transition-colors duration-150 hover:bg-white/10">
                            <div className="flex items-center justify-start gap-5 px-2">
                                <div>
                                    {icon}
                                </div>
                                <div>
                                    <span className="text-white font-semibold text-xl">{text}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </li>
            ))
        }
    </>
  )
}
