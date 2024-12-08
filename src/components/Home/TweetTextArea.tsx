import Image from "next/image";
import {Textarea} from "@nextui-org/react";
import InputFileTweet from "./InputFileTweet";

export default function TweetTextArea() {
  return (
    <div className="grid grid-cols-[max-content_1fr] grid-rows-[max-content_max_content_60px] gap-x-2">
        <div>
            <Image className="rounded-full" src="https://pbs.twimg.com/profile_images/1841249485810245632/0VcVbOE8_normal.jpg" width={40} height={40} alt="Nombre de usuario"/>
        </div>
        <div className="flex-grow">
            <Textarea disableAnimation radius="none" minRows={2} variant="underlined" placeholder="¡¿Qué está pasandó?!" classNames={{input: "text-white text-xl placeholder:text-zinc-500 placeholder:font-normal",  inputWrapper: "border-b after:bg-transpatent" }}/>
        </div>
        <div className="row-start-2 col-start-2 px-2">
          este es el lugar de la imagen cuando el usuario eliga el archivo
        </div>
        <div className="row-start-3 col-start-2 flex items-center justify-between px-2 py-2">
          <InputFileTweet/>
          <div>
            <button className="bg-slate-100 text-black font-semibold py-2 px-4 rounded-full">Postear</button>
          </div>
        </div>
    </div>
  )
}
