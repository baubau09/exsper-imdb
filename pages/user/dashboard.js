import React, {useEffect, useState} from "react";
import useSWR from "swr";
import Head from "next/head";
import Header from "../../components/Header";
import GeneralInfo from "../../components/User/GeneralInfo";
import { useUserData } from "../../hooks/useUserData";
import useGetUserInfo from "../../hooks/useGetUserInfo";
import Loader from "../../components/Loader";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const UserDashboard = () => {
    const pageTitle = "EXSPER - Profile Dashboard"
    const {user, isLoading} = useUserData()
    const getUserInfoURL = "https://l9r8bafvh6.execute-api.ap-southeast-1.amazonaws.com/test/users/";

    const { data, error } = useSWR((user && !isLoading) ? getUserInfoURL + user["custom:USER_ID"] : null, fetcher);

    const ratedItems = data && (data.IDS_OF_RATED_MOVIES).slice(1, (data.IDS_OF_RATED_MOVIES).length - 1).split(',').map(Number)
    const viewedItems = data && (data.IDS_OF_RECENTLY_VIEWED_MOVIES).slice(1, (data.IDS_OF_RECENTLY_VIEWED_MOVIES).length - 1).split(',').map(Number)

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="Home to the movie experts" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <Header />

            <div className="xs:mt-40 md:mt-20">
                <Loader show={isLoading}/>
                {
                    (user && data) && 
                    <GeneralInfo
                    name={data.NAME}
                    age={data.AGE}
                    gender={data.GENDER}
                    email={data.EMAIL}/>
                }
            </div>
        </>
    )
};

export default UserDashboard;
