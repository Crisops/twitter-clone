export default function AuthLayout({children}: {children: React.ReactNode}) {
    return (
        <main className='relative h-screen'>
            {children}
        </main>
    )
}