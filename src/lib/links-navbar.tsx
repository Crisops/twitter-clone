import { LinksAsideNavHome } from '@/types/generics'
import { IconBell, IconBookmark, IconDoorExit, IconMail, IconSearch, IconWashDryOff } from '@tabler/icons-react'
import { IconBolt, IconHome, IconUsers } from '@/components/Icons'

export const linksDesktop: LinksAsideNavHome[] = [
  { href: '/home', icon: <IconHome />, text: 'Inicio' },
  { href: '/explore', icon: <IconSearch size='1.75rem' />, text: 'Explorar' },
  { href: '/notifications', icon: <IconBell size='1.75rem' />, text: 'Notificaciones' },
  { href: '/messages', icon: <IconMail size='1.75rem' />, text: 'Mensajes' },
  { href: '/grok', icon: <IconWashDryOff size='1.75rem' />, text: 'Grok' },
  { href: '/bookmarks', icon: <IconBookmark size='1.75rem' />, text: 'Guardados' },
  { href: '/communities', icon: <IconUsers />, text: 'Comunidades' },
  { href: '/verified-orgs-signup', icon: <IconBolt />, text: 'Organizaciones ver' }
]

export const linksMovileDrawer: LinksAsideNavHome[] = [
  { href: '/bookmarks', icon: <IconBookmark size='1.75rem' />, text: 'Guardados' },
  { href: '/logout', icon: <IconDoorExit />, text: 'Cerrar sesión' }
]
