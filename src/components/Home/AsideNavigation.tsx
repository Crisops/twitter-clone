
import LinksSideNav from "./LinksSideNav";

export default function AsideNavigation() {
  return (
    <>
        <nav className="flex">
            <ul className="flex flex-col justify-start w-full gap-5">
                <LinksSideNav/>
            </ul>
        </nav>
    </>
  )
}
