import Link from "next/link"
import "./navbar.css"

export default function Navbar() {
    
    return (
        <div className="nav-container">
            <nav className="nav-wrapper">
                <ul>
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link href={"https://github.com/rajkmajk"}>GitHub</Link>
                    </li>
                    <li>
                        <Link href={"mailto:example@example.com"}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}