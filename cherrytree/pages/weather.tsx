const api_key = process.env.WEATHER_API_KEY;

import SearchBox from '@/components/SearchBox'
import Head from 'next/head'

export default function Search() { 
    return (
        <>
            <Head>
                <title>Weather</title>
            </Head>
            <main className="mt-5 mx-5">
                <h1 className='text-xl font-medium mb-4'>Weather</h1>
                <form action="">
                    <h2 className='text-lg mb-4'>Search for local Weather</h2>
                    <SearchBox />
                </form>
            </main>
        </>
    )
}