import { validationRulesLogin} from "@/lib/form-auth"
import { FormLogin } from "@/types/store"
import { Mode, useForm } from "react-hook-form"

export const useFormAuthLogin = (mode?: Mode) => {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormLogin>({mode})

    const registerField = (name: keyof FormLogin) => register(name, validationRulesLogin[name])


    return { registerField, handleSubmit, watch, errors };
}