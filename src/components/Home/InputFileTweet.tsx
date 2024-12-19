'use client'

import { ChangeEvent, useId } from "react"
import { IconPhoto } from "@tabler/icons-react"
import { useCreateTweet } from "@/hooks/useStore"

export default function InputFileTweet() {

  const {setImageTweet} = useCreateTweet(state => state) 

  const idFile = useId()

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {

    const {files} = e.target

    if(files?.length){
      const [ imageTweet ] = files
      const urlImage = URL.createObjectURL(imageTweet)
      setImageTweet(urlImage)    
    }  
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
