import {Textarea} from "@nextui-org/react";
import InputFileTweet from "./InputFileTweet";
import TweetImageUser from "./TweetImageUser";
import TweetImageLoad from "./TweetImageLoad";
import { getSessionAuth, getUserProfile } from "@/utils/supabase/getUser";

export default async function TweetTextArea() {

  const {id} = await getSessionAuth()
  const { name, username , avatar_url } = await getUserProfile({ id })

  return (
    <div className="grid grid-cols-[max-content_1fr] grid-rows-[max-content_max_content_60px] gap-x-2">
        <div>
            <TweetImageUser avatar_url={avatar_url ?? ''} name={name} username={username}/>
        </div>
        <div className="flex-grow">
            <Textarea disableAnimation radius="none" minRows={2} variant="underlined" placeholder="¡¿Qué está pasandó?!" classNames={{input: "text-white text-xl placeholder:text-zinc-500 placeholder:font-normal",  inputWrapper: "border-none after:bg-transpatent" }}/>
        </div>
        <TweetImageLoad/>
        <div className="row-start-3 col-start-2 flex items-center justify-between px-2 py-2 border-t border-zinc-800">
          <InputFileTweet/>
          <div>
            <button className="bg-slate-100 text-black font-semibold py-2 px-4 rounded-full">Postear</button>
          </div>
        </div>
    </div>
  )
}
