import { IconTwitter } from '@/components/Icons'
import SectionForm from '@/components/ChooseAccount/SectionForm'

export const HomeLayout = ({children}: {children?: React.ReactNode}) => {
    return (
        <section className="h-full grid place-items-center grid-cols-2 pl-20">
            <IconTwitter size="size-[23rem]"/>
            <SectionForm/>
            {children}
        </section>
    )
}