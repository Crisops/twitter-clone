import Image from "next/image";

interface TweetImageUser {
  avatar_url: string
  name: string
  username: string
}


export default async function TweetImageUser({avatar_url, name, username}: TweetImageUser) {

  return (
    <div>
        <Image className="rounded-full" src={avatar_url ?? ''} width={40} height={40} alt={`${username} - ${name}`}/> 
    </div>
  )
}
