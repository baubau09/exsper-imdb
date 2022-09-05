import "../styles/globals.css";
import "../styles/MovieCarousel.css"
import "../styles/MovieDetails.css"
import "bootstrap-icons/font/bootstrap-icons.css";
//TODO: Configure vredential for analytics
import { Amplify, Auth, Analytics, AWSKinesisProvider } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { UserContext } from '../lib/context'
import { useUserData } from '../hooks/useUserData'
import { useRouter } from 'next/router'


Analytics.addPluggable(new AWSKinesisProvider());
Amplify.configure({...awsconfig, ssr:true});
console.log(awsconfig)
//TODO: Add Analytics and configuring analytics
function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const userData = useUserData()

    return (
        <UserContext.Provider value={userData}>
            <Component key={router.asPath} {...pageProps} />
        </UserContext.Provider>
        
    )
}

export default MyApp;
