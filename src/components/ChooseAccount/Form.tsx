import { ButtonGoogle } from "../shared/ButtonGoogle"

const Form = () => {

  return (
    <form className="max-w-72 flex flex-col gap-10">
        <h1 className="text-slate-100 font-extrabold text-3xl">Únete Hoy</h1>
        <div className="relative w-full">
            <div className="flex flex-col gap-4">
              <ButtonGoogle textContent="Regístrarse con Google"/>
            </div>
        </div>
    </form>
  )
}

export default Form