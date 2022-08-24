import Head from "next/head";
import Header from "../components/Header"
import dynamic from 'next/dynamic'

const DynamicCarousel = dynamic(() => import('../components/MovieCarousel'), {
  ssr: false,
})
export default function Home() {
    return (
        <>
            <Head>
                <title>EXSPER - Home to the movie experts</title>
                <meta name="description" content="Home to the movie experts" />
                <link rel="icon" href="/logo.png" />
            </Head>

            <Header/>
            <div className="2xl:container mx-auto">
            <DynamicCarousel/>
            </div>
        </>
    );
}
