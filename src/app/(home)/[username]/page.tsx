interface ProfilePageParams {
    params: {
        username: string
    }
}

export default function ProfilePage ({ params: { username } }:ProfilePageParams) {
  return (
    <div>Hola : {username.replace('%40', '')}</div>
  )
}
