import Link from "next/link"
import Style from "./navigation.module.css"

const Navigation = () => {
    return(
        <nav className={Style.navigation}>
            <ul>
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/about"}>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;