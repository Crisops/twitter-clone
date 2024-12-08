
import { IconPhoto } from "@tabler/icons-react"
import { useId } from "react"

export default function InputFileTweet() {

    const idFile = useId()

  return (
    <>
        <label
        htmlFor={idFile}
        title="Multimedia"
        className="cursor-pointer"
        >
            <IconPhoto size={18} color="#1d9bf0" />
        </label>
        <input
        id={idFile}
        type="file"
        className="hidden" // Acción al seleccionar archivo
        />
    </>

  )
}
