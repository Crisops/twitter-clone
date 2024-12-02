import { validationRules} from "@/lib/form-auth"
import { useForm } from "react-hook-form"

export const useFormAuthLogin = () => {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormLogin>({mode: "onChange"})

    const registerField = (name: keyof FormLogin) => register(name, validationRules[name])


    return { registerField, handleSubmit, watch, errors };
}