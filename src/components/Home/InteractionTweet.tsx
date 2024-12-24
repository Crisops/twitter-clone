
interface InteractionsTweetProps {
    icon: React.ReactNode
    bgColor: string
    textColor: string
    quantity?: number
}

export default function InteractionTweet({icon, bgColor, textColor, quantity}: InteractionsTweetProps) {
  return (
    <div className='flex flew-grow items-center gap-x-1 group cursor-pointer'>
        <div className={`relative flex items-center before:absolute before:-inset-2 before:rounded-full before:transition-colors before:duration-300 before:ease-in-out ${bgColor}`}>
            <button className='w-full h-full'>
                {icon}
            </button>
        </div>
        <div>
            <span className={`text-xs pointer-events-none text-zinc-600 ${textColor} marker:transition-colors duration-300 ease-in-out`}>{quantity}</span>
        </div> 
    </div>
  )
}
