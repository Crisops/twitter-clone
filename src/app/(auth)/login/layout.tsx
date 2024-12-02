
import { HomeLayout } from '@/components/shared/HomeLayout'

export default function LoginLayout({children}: {children: React.ReactNode}) {
    return (
        <HomeLayout>
            {children}
        </HomeLayout>
    )
}