'use client'

import React, { ChangeEvent, createContext, ReactNode, useEffect, useReducer, useState } from 'react'
import equal from 'fast-deep-equal'
import { FormEditProfile } from '@/types/store'
import { useEditProfile } from '@/hooks/useStore'
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

type ModalEditContextProps = {
    isEqualData: boolean
    initialForm: FormEditProfile
    oldDataProfile: FormEditProfile
    openModal: ReducerEditProfile['state']
    dispatch: React.Dispatch<ReducerEditProfile['action']>
    updateOldData: (data: FormEditProfile) => void
    handleOnChangeData: (e: ChangeEvent<HTMLInputElement>) => void
}

export const ModalEditProfileContext = createContext<ModalEditContextProps | null>(null)

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
  const [isEqualData, setIsEqualData] = useState<boolean>(false)
  const { initialForm, setFormEditProfile } = useEditProfile(store => store)
  const [oldDataProfile, setOldData] = useState<FormEditProfile>(initialFormEditProfile)
  const [openModal, dispatch] = useReducer(reducerEditProfile, { modal: '', open: false })

  useEffect(() => {
    setIsEqualData(equal(oldDataProfile, initialForm))
  }, [initialForm, oldDataProfile, isEqualData])

  const updateOldData = (data: FormEditProfile) => {
    const transForm = { ...data }
    for (const key in transForm) if (transForm[key as keyof FormEditProfile] === null) transForm[key as keyof FormEditProfile] = ''
    setOldData(transForm)
    setFormEditProfile(transForm)
    setIsEqualData(equal(data, initialForm))
  }

  const handleOnChangeData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormEditProfile({ ...initialForm, [name]: value })
  }

  return (
    <ModalEditProfileContext.Provider value={{ isEqualData, initialForm, oldDataProfile, openModal, dispatch, updateOldData, handleOnChangeData }}>
      {children}
    </ModalEditProfileContext.Provider>
  )
}
