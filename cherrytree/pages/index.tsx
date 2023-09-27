import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps(){
  return {
    props: {
      pageId: "home", 
      metadata: {
        title: "Jon Mitten", 
        description: "The subtle disease that is Jon Mitten", 
        openGraph: {
          image: "https://example.com/image.jpg"
        }
      }
    }
  }
}

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <p className="text-bold">Hello, world!</p>
    </div>
  )
}

