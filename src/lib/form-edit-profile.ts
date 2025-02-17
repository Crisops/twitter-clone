import { RegisterOptions } from 'react-hook-form'
import { EditableProfileFields } from '@/hooks/useFormEditProfile'

export const validationRulesEditProfile: Record<keyof EditableProfileFields, RegisterOptions<EditableProfileFields>> = {
  name: {
    required: '¿Cómo te llamas?',
    minLength: {
      value: 4,
      message: 'El nombre debe tener entre 4 y 50 caracteres.'
    },
    maxLength: {
      value: 50,
      message: 'El nombre debe tener entre 4 y 50 caracteres.'
    },
    pattern: {
      value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]{1,50}$/,
      message: 'El nombre debe tener solo letras y espacios'
    }
  },
  biography: {
    maxLength: {
      value: 160,
      message: 'La biografía debe tener como máximo 160 caracteres'
    }
  },
  location: {
    maxLength: {
      value: 30,
      message: 'La ubicación debe tener como máximo 30 caracteres'
    }
  },
  webSite: {
    maxLength: {
      value: 100,
      message: 'El sitio web debe tener como máximo 100 caracteres'
    }
  }
}
