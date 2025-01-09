'use client'

import { useState } from 'react'
import { Form } from './Form'
import { DataCredentialsForm } from './DataCredentialsForm'

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
