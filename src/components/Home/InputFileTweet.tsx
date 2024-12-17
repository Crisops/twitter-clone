'use client'

import { IconPhoto } from "@tabler/icons-react"
import { ChangeEvent, useId } from "react"

export default function InputFileTweet() {

  const idFile = useId()

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {

    const {files} = e.target

    if(!files) return

    const [ imageTweet ] = files

    console.log(imageTweet);
    
  
  }

  return (
    <>
        <label
        htmlFor={idFile}
        title="Multimedia"
        className="cursor-pointer"
        >
          <IconPhoto size={18} color="#1d9bf0" />
        </label>
        <input
        id={idFile}
        type="file"
        className="hidden"
        onChange={handleFileChange}
        />
    </>

  )
}
