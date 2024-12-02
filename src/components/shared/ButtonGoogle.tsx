import { IconGoogle } from "../Icons"

export const ButtonGoogle = ({textContent}: {textContent: string}) => {
    return (
        <div className="relative bg-white flex items-center justify-center rounded-full gap-4">
            <IconGoogle/>
            <button className="text-lg text-zinc-700 py-3 pr-3 font-medium">{textContent}</button>
        </div>
    )
}