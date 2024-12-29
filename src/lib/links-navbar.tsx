import { LinksAsideNavHome } from '@/types/generics'
import { IconBell, IconBookmark, IconDoorExit, IconMail, IconSearch, IconUser, IconWashDryOff } from '@tabler/icons-react'
import { IconBolt, IconHome, IconTwitter, IconUsers } from '@/components/Icons'

export const linksDesktop: LinksAsideNavHome[] = [
  { href: '/home', icon: <IconHome />, text: 'Inicio' },
  { href: '/explore', icon: <IconSearch size='1.75rem' />, text: 'Explorar' },
  { href: '/notifications', icon: <IconBell size='1.75rem' />, text: 'Notificaciones' },
  { href: '/messages', icon: <IconMail size='1.75rem' />, text: 'Mensajes' },
  { href: '/grok', icon: <IconWashDryOff size='1.75rem' />, text: 'Grok' },
  { href: '/bookmarks', icon: <IconBookmark size='1.75rem' />, text: 'Guardados' },
  { href: '/communities', icon: <IconUsers />, text: 'Comunidades' },
  { href: '/premium_sign_up', icon: <IconTwitter size='size-[1.75rem]' />, text: 'Premium' },
  { href: '/verified-orgs-signup', icon: <IconBolt />, text: 'Organizaciones ver' },
  { href: '/profile', icon: <IconUser size='1.75rem' />, text: 'Perfil' }
]

export const linksMovileDrawer: LinksAsideNavHome[] = [
  { href: '/profile', icon: <IconUser size='1.75rem' />, text: 'Perfil' },
  { href: '/bookmarks', icon: <IconBookmark size='1.75rem' />, text: 'Guardados' },
  { href: '/logout', icon: <IconDoorExit />, text: 'Cerrar sesión' }
]
