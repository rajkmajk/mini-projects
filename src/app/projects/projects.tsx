import Link from "next/link"
import "./projects.css"

export default function Projects() {
    
    return (
        <div className="projects-container">
            <div className="projects-wrapper">
                <ul>
                    <li>
                    <Link href={"/projects/microphonetest"} id="project-link-color"> Test 1 </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
