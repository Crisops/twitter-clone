import { LinksAsideNavHome } from '@/types/generics'
import { IconBell, IconBookmark, IconDoorExit, IconMail, IconSearch, IconUsers, IconWashDryOff } from '@tabler/icons-react'
import { IconHome } from '@/components/Icons'

export const linksDesktop: LinksAsideNavHome[] = [
  { href: '/home', icon: <IconHome />, text: 'Inicio' },
  { href: '/explore', icon: <IconSearch size='1.75rem' color='white' />, text: 'Explorar' },
  { href: '/#notifications', icon: <IconBell size='1.75rem' color='white' />, text: 'Notificaciones' },
  { href: '/#messages', icon: <IconMail size='1.75rem' fill='currentColor' className='stroke-white' />, text: 'Mensajes' },
  { href: '/#grok', icon: <IconWashDryOff size='1.75rem' color='white' />, text: 'Grok' },
  { href: '/bookmarks', icon: <IconBookmark size='1.75rem' color='white' fill='currentColor' />, text: 'Guardados' },
  { href: '/#communities', icon: <IconUsers size='1.75rem' color='white' />, text: 'Comunidades' }
]

export const linksMovileDrawer: LinksAsideNavHome[] = [
  { href: '/bookmarks', icon: <IconBookmark size='1.75rem' color='white' />, text: 'Guardados' },
  { href: '/logout', icon: <IconDoorExit size='1.75rem' color='white' />, text: 'Cerrar sesión' }
]

export const linksMovileHome: Omit<LinksAsideNavHome, 'text'>[] = [
  { href: '/home', icon: <IconHome /> },
  { href: '/explore', icon: <IconSearch size='1.75rem' color='white' /> },
  { href: '/#messages', icon: <IconMail fill='currentColor' size='1.75rem' className='stroke-white' /> }
]
