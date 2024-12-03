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

export const validationRulesSignUp: Record<keyof NewAccountForm, RegisterOptions<NewAccountForm>> = {
    fullName: {
        required: "¿Cómo te llamas?",
        minLength: {
            value: 4,
            message: 'El nombre debe tener entre 4 y 60 caracteres.',
        },
        maxLength: {
            value: 60,
            message: 'El nombre debe tener entre 4 y 60 caracteres.',
        },
        pattern: {
            value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]{1,60}$/,
            message: "El nombre debe tener solo letras y espacios"
        }
    },
    username:{
        required: "El nombre de usuario es requerido",
        pattern: {
            value: /^[a-zA-Z0-9_]{4,60}$/,
            message: "El nombre de usuario debe tener solo letras y numeros"
        },
        minLength: {
            value: 4,
            message: 'El nombre de usuario debe tener entre 4 y 10 caracteres.',
        },
        maxLength: {
            value: 10,
            message: "El nombre de usuario debe tener entre 4 y 10 caracteres."
        }
    },
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
    },
    birthday: {}
}
