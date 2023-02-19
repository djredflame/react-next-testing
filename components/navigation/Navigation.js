import Link from "next/link"
import Style from "./navigation.module.css"
import { useState } from "react"

const Navigation = () => {
    const [isActiv, setIsActive ] = useState(false)

    return(
        <nav className={Style.navigation}>
            <button className={isActiv ? 'active' : ''}type={"button"} onClick={() => {
                isActiv ? setIsActive(false) : setIsActive(true)
            }}>
                <span style={isActiv ? {transform: 'rotate(38deg)'} : {transform: 'rotate(0deg)'}}/>
                <span style={isActiv ? {opacity: '0'} : {opacity: '100'}}/>
                <span style={isActiv ? {transform: 'rotate(-38deg)'} : {transform: 'rotate(0deg)'}}/>
            </button>
            <ul style={{display: isActiv ? 'block' : 'none'}}>
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/hogwarts"}>Hogwarts</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;