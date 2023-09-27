import Image, { StaticImageData } from "next/image"
import puppyOne from "../public/images/puppy1.jpeg"
import puppyTwo from "../public/images/puppy2.jpeg"
import puppyThree from "../public/images/puppy3.jpeg"


type ProjectItemProps = {
    name: string
    url: string
    urlDisplay: string
    imageSrc: StaticImageData
}

export async function getStaticProps(){
    return {
        props: {
            pageId: "projects"
        }
    }
}

function ProjectItem(props: ProjectItemProps){
    let {name, url, urlDisplay, imageSrc: image} = props
    return (
        <li>
            <a href={url}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <Image className="w-full" src={image} alt={name} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{name}</div>
                    </div>
                    <div className="px-6 pb-4">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {urlDisplay}
                        </span>
                    </div>
                </div>    
            </a>
        </li>        
    )
}

export default function Projects() {
    return (
        <div className="mt-16 px-8">
            <header>
                <h1 className="font-bold text-4xl text-zinc-800">My Projects</h1>
                <p className="text-base mt-6 text-zinc-600">
                    I've been working on these creative projects.
                </p>
            </header>
            <div className="mt-16">
                <h2 className="text-2xl">
                    Apps
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mt-8">
                    <ProjectItem 
                        name={"BubbyCoin"}
                        url={"https://google.com"}
                        urlDisplay={"google.com"}
                        imageSrc={puppyOne}
                    
                    />
                </ul>    
            </div>
            <div className="mt-16">
                <h2 className="text-2xl">
                    Books
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mt-8">
                    <ProjectItem 
                        name={"Not For the Faint of Heart"}
                        url={"https://google.com"}
                        urlDisplay={"google.com"}
                        imageSrc={puppyTwo}
                    />
                    <ProjectItem 
                        name={"A Beginner's Guide to Selling Millions of Books"}
                        url={"https://google.com?q=how+to+sell+my+book"}
                        urlDisplay={"Ask Me How Today!"}
                        imageSrc={puppyThree}
                    />
                </ul>
            </div>
        </div>
    )
}