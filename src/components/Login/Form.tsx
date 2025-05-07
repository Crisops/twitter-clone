'use client'

import { useState } from 'react'
import { DataContainerForm } from '@/components/Login/DataContainerForm'
import { FormLogin } from '@/components/Login/FormLogin'
import { EnvConfig } from '@/config/env.config'

export const Form = () => {
  const [nextData, setNextData] = useState<boolean>(false)

  const SITE_URL = EnvConfig().NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

  console.log(SITE_URL)

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
