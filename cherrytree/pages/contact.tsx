export async function getStaticProps(){
    return {
        props: { 
            pageId: "contact"
        }
    }
}

export default function Contact() {
    return (
        <div>Contact</div>
    )
}