import Head from 'next/head' 

type NavItemProps = {
    title: string
    url: string
    isSelected: boolean
}

type NavbarProps = {
    pageId: string
}

type FooterLinkProps = {
    text: string
    url: string
}

function NavItem({title, url, isSelected}: NavItemProps) {
    return (
        <li>
            <a
            className={`block px-3 py-2 transition hover:text-teal-500 ${isSelected ? "text-red-500" : ""} `} 
            href={url}>
                {title}
            </a>
        </li>
    )
}
function Navbar(props: NavbarProps) {
    return (
        <div className="flex justify-center mx-auto max-w-7xl h-16 pt-6">
            <nav>
                <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
                    <NavItem title={"Home"} url={"/"} isSelected={props.pageId == "home"}/>
                    <NavItem title={"Contact"} url={"/contact"} isSelected={props.pageId == "contact"} />
                    <NavItem title={"Projects"} url={"/projects"} isSelected={props.pageId == "projects"} />
                    <NavItem title={"Weather"} url={"/weather"} isSelected={props.pageId == "weather" } />
                </ul>
            </nav>
        </div>
    )
}

function FooterLink(props: FooterLinkProps){
    let {url, text} = props 
    return <a className="transition hover:text-teal-500" href={url}>{text}</a>
}

function Footer(){
    return (
    <footer className="pt-10 px-8 pb-16 border-t">
        <div className="flex justify-between gap-6">
            <FooterLink text={"Home"} url={"/"} />
            <FooterLink text={"Contact"} url={"/contact"} />
            <FooterLink text={"Projects"} url={"/projects"} />
        </div>
        <p className="text-sm text-zinc-400">&copy; 2023 Jonathan Mitten. Some rights reserved.</p>

    </footer>
    )
}


export default function Layout({children}: any){
    return (
        <>
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar pageId={children.props.pageId} />
        <main>{children}</main>
        <Footer />
        </>
    )
}