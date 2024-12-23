import { getSessionAuth, getUserProfile } from "@/utils/supabase/getUser";
import Image from "next/image";

export default async function TweetImageUser() {

  const {id} = await getSessionAuth()
  const { avatar_url, name, username } = await getUserProfile({ id })

  return (
    <div>
        <Image className="rounded-full" src={avatar_url ?? ''} width={40} height={40} alt={`${username} - ${name}`}/> 
    </div>
  )
}
