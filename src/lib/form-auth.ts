import { RegisterOptions } from 'react-hook-form'
import { type FormLogin, type FormSignUp } from '@/types/store'

export type FormAuth = FormLogin & FormSignUp

export const validationRules: Record<keyof FormAuth, RegisterOptions<FormAuth>> = {
  fullName: {
    required: '¿Cómo te llamas?',
    minLength: {
      value: 4,
      message: 'El nombre debe tener entre 4 y 255 caracteres.'
    },
    maxLength: {
      value: 255,
      message: 'El nombre debe tener entre 4 y 255 caracteres.'
    },
    pattern: {
      value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]{1,255}$/,
      message: 'El nombre debe tener solo letras y espacios'
    }
  },
  username: {
    required: 'El nombre de usuario es requerido',
    pattern: {
      value: /^[a-zA-Z0-9_]{4,60}$/,
      message: 'El nombre de usuario debe tener solo letras y numeros'
    },
    minLength: {
      value: 4,
      message: 'El nombre de usuario debe tener entre 4 y 15 caracteres.'
    },
    maxLength: {
      value: 15,
      message: 'El nombre de usuario debe tener entre 4 y 15 caracteres.'
    }
  },
  email: {
    required: 'El correo es requerido',
    pattern: {
      value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
      message: 'Ingresa un email valido'
    }
  },
  password: {
    required: 'La contraseña debe tener entre 6 y 60 caracteres.',
    minLength: {
      value: 6,
      message: 'La contraseña debe tener entre 6 y 60 caracteres.'
    },
    maxLength: {
      value: 60,
      message: 'La contraseña debe tener entre 6 y 60 caracteres.'
    }
  },
  birthday: {}
}
