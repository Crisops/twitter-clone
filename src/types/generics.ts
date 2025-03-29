import { ReactNode } from 'react'
import { Provider } from '@supabase/supabase-js'
import { Database } from '@/types/database.types'
import { FormAuth } from '@/lib/form-auth'

export type LinksAsideNavHome = {
    href: string,
    icon: ReactNode
    text: string
}

export type TableRelationships<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Relationships'][number]['foreignKeyName'];

export type SignUpProvider = {
  provider: Provider | 'email'
  url: string
} | {
  provider: Provider | 'email'
  url: null
}

export type SignUpProps = {
  provider: Provider | 'email',
  data?: FormAuth
}
