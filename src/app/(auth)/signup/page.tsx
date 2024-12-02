import { SectionForm } from "@/components/SignUp/SectionForm";

export default function SignUpPage() {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-sky-800/10 z-50 before:absolute before:inset-0 before:bg-white/10 before:-z-[1]">
            <SectionForm/>
        </div>
    )
}