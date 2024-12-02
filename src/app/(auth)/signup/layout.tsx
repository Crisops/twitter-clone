import { HomeLayout } from '@/components/shared/HomeLayout'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: "Regístrate en X / By Crisops"
}



export default function SignLayout({children}: {children: React.ReactNode}) {
    return (
        <HomeLayout>
            {children}
        </HomeLayout>
    )
}