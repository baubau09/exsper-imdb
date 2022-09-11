import Head from "next/head";
import Header from "../components/Header"
import dynamic from 'next/dynamic'
const HeaderDynamicCarousel = dynamic(() => import('../components/HeaderMovieCarousel'), {
  ssr: false,
})

export async function getServerSideProps(context) {
    const data = {}
    
    return {
        props: {data}, 
    }
}

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
            <HeaderDynamicCarousel/>
            </div>
        </>
    );
}
