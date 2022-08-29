import "../styles/globals.css";
import "../styles/MovieCarousel.css"
import "../styles/MovieDetails.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
import { UserContext } from '../lib/context'
import { useUserData } from '../hooks/useUserData'

Amplify.configure({...awsconfig, ssr:true});

function MyApp({ Component, pageProps }) {

    const userData = useUserData()

    return (
        <UserContext.Provider value={userData}>
            <Component {...pageProps} />
        </UserContext.Provider>
        
    )
}

export default MyApp;
