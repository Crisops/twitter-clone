import { SectionForm } from "@/components/SignUp/SectionForm";

export default function SignUpPage() {
    return (
        <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-sky-800/10 z-50 before:absolute before:inset-0 before:bg-white/10 before:-z-[1]">
            <SectionForm/>
        </div>
    )
}