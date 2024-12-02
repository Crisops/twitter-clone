
import Footer from '@/components/ChooseAccount/Footer'


export default function AuthLayout({children}: {children: React.ReactNode}) {
    return (
        <main className='h-[calc(100vh-6rem)]'>
            {children}
            <Footer/>
        </main>
    )
}