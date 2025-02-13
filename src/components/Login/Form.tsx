'use client'

import { useState } from 'react'
import { DataContainerForm } from '@/components/Login/DataContainerForm'
import { FormLogin } from '@/components/Login/FormLogin'

export const Form = () => {
  const [nextData, setNextData] = useState<boolean>(false)

  const handleNextConfirmData = () => {
    setNextData(true)
  }

  return (
    <>
      {
        !nextData ? <DataContainerForm handleNextConfirmData={handleNextConfirmData} /> : <FormLogin />
      }
    </>
  )
}
