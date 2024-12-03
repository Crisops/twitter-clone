import { validationRulesSignUp } from "@/lib/form-auth"
import { Mode, useForm } from "react-hook-form"



export const useFormAuthSignUp = (mode?: Mode) => {


    const {register, handleSubmit, watch, formState: {errors}} = useForm<NewAccountForm>({mode})


    const registerField = (name: keyof NewAccountForm) => register(name, validationRulesSignUp[name])


    return {registerField, handleSubmit, watch, errors};
}