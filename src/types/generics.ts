import { ReactNode } from 'react'
import { Database } from '@/types/database.types'

export type LinksAsideNavHome = {
    href: string,
    icon: ReactNode
    text: string
}

export type TableRelationships<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Relationships'][number]['foreignKeyName'];
