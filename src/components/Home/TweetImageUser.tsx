import Image from "next/image";

export default function TweetImageUser() {
  return (
    <div>
        <Image className="rounded-full" src="https://pbs.twimg.com/profile_images/1841249485810245632/0VcVbOE8_normal.jpg" width={40} height={40} alt="Nombre de usuario"/>
    </div>
  )
}
