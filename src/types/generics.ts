import { ReactNode } from 'react'
import { Database } from './database.types'

export type LinksAsideNavHome = {
    href: string,
    icon: ReactNode
    text: string
}

export type ReducerAction = { type: 'follow' | 'unfollow' };

export type TableRelationships<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Relationships'][number]['foreignKeyName'];
