'use client'

import React, { createContext, ReactNode, useReducer, useRef, useCallback, useState } from 'react'
import { FormEditProfileUser } from '@/types/store'
import { initialFormEditProfile } from '@/config/fields-form'

type ReducerEditProfile = {
    state: {
        modal: 'edit_profile' | 'validate_changes' | ''
        open: boolean
    }
    action: {
        type: 'OPEN_MODAL_EDIT_PROFILE' | 'OPEN_MODAL_VALIDATE_CHANGES' | 'CLOSE_MODAL'
    }
}

type ModalEditProfileContextProps = {
    isEqualData: boolean
    openModal: ReducerEditProfile['state']
    oldDataProfile: React.MutableRefObject<FormEditProfileUser>
    checkEqualData: (isEqual: boolean) => void
    dispatch: React.Dispatch<ReducerEditProfile['action']>
    updateOldData: (data: FormEditProfileUser) => void
}

export const ModalEditProfileContext = createContext<ModalEditProfileContextProps | null>(null)

function reducerEditProfile (state: ReducerEditProfile['state'], action:ReducerEditProfile['action']): ReducerEditProfile['state'] {
  switch (action.type) {
    case 'OPEN_MODAL_EDIT_PROFILE':
      return { modal: 'edit_profile', open: true }

    case 'OPEN_MODAL_VALIDATE_CHANGES':
      return { modal: 'validate_changes', open: true }

    case 'CLOSE_MODAL':
      return { modal: '', open: false }
    default:
      return state
  }
}

export default function ModalEditProfileProvider ({ children }: {children: ReactNode | ReactNode[]}) {
  const [openModal, dispatch] = useReducer(reducerEditProfile, { modal: '', open: false })
  const oldDataProfile = useRef<FormEditProfileUser>(initialFormEditProfile)
  const [isEqualData, setIsEqualData] = useState<boolean>(true)

  const updateOldData = useCallback((data: FormEditProfileUser) => {
    oldDataProfile.current = data
  }, [])

  const checkEqualData = (isEqual: boolean) => {
    setIsEqualData(isEqual)
  }

  return (
    <ModalEditProfileContext.Provider value={{ isEqualData, oldDataProfile, openModal, dispatch, updateOldData, checkEqualData }}>
      {children}
    </ModalEditProfileContext.Provider>
  )
}
