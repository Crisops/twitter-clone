import { RegisterOptions } from "react-hook-form"


export const validationRulesLogin: Record<keyof FormLogin, RegisterOptions<FormLogin>> = {
    email: {
        required: "El correo es requerido",
        pattern: {
            value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
            message: "Ingresa un email valido"
        },
    },
    password: {
        required: "La contraseña debe tener entre 4 y 60 caracteres.",
        minLength: {
            value: 4,
            message: 'La contraseña debe tener entre 4 y 60 caracteres.',
        },
        maxLength: {
            value: 60,
            message: 'La contraseña debe tener entre 4 y 60 caracteres.',
        },
    }
} 
