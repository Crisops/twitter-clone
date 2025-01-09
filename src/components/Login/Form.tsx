'use client'

import { useState } from 'react'
import { DataContainerForm } from './DataContainerForm'
import { FormLogin } from './FormLogin'

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
