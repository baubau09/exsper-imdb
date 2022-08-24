import Head from "next/head";
import Header from "../components/Header"

export default function Home() {
    return (
        <>
            <Head>
                <title>EXSPER - Home to the movie experts</title>
                <meta name="description" content="Home to the movie experts" />
                <link rel="icon" href="/logo.png" />
            </Head>
        </>
    );
}
