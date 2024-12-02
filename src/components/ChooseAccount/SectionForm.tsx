import Link from "next/link"
import Form from "./Form"

const SectionForm = () => {
  return (
    <section className="relative w-full h-full pl-20">
        <div className="w-full h-full flex flex-col justify-center">
            <div className="max-w-2xl mb-20">
                <span className="font-bold text-8xl text-slate-100">Lo que está pasando ahora</span>
            </div>
            <Form/>
            <div className="max-w-[370px] mt-3">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-full h-px bg-zinc-700"></div>
                    <div className="text-white">O</div>
                    <div className="w-full h-px bg-zinc-700"></div>
                </div>
                <div>
                    <Link href={'/signup'} className="bg-sky-500 block p-3 text-white text-xl font-medium rounded-full text-center transition-colors duration-200 ease-in-out hover:bg-sky-600">Crear Cuenta</Link>
                </div>
                <div className="mt-2">
                    <p className="text-zinc-500 text-sm">Al registrarte, aceptas los <a href="#" className="text-sky-500 hover:underline">Términos de servicio</a> y la <a href="#" className="text-sky-500 hover:underline">Política de privacidad</a>, incluida la política de <a href="#" className="text-sky-500 hover:underline">Uso de Cookies.</a>
                    </p>
                </div>
                <div className="mt-12">
                    <span className="text-white font-medium text-2xl">¿Ya tienes una cuenta?</span>
                    <div className="mt-6">
                        <div className="border border-zinc-500 rounded-full p-3 transition-colors ease-in-out duration-200 hover:bg-sky-800/20">
                            <Link href={'/login'} className="text-sky-500 block text-center font-bold text-xl">Iniciar sesión</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SectionForm