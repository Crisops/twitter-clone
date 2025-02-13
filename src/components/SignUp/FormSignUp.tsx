'use client'

import { useState } from 'react'
import { DataCredentialsForm } from '@/components/SignUp/DataCredentialsForm'
import { Form } from '@/components/SignUp/Form'

export default function FormSignUp () {
  const [nextData, setNextData] = useState<boolean>(false)

  const handleNextData = () => {
    setNextData(true)
  }

  return (
    <>
      {
        !nextData ? <DataCredentialsForm handleNextData={handleNextData} /> : <Form />
      }
    </>
  )
}
