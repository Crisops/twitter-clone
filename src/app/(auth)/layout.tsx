
import Footer from '@/components/ChooseAccount/Footer'


export default function AuthLayout({children}: {children: React.ReactNode}) {
    return (
        <main className='h-[calc(100vh-3.5rem)]'>
            {children}
            <Footer/>
        </main>
    )
}