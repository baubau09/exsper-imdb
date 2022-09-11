import { useEffect, useState } from 'react';
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";

export function useUserData() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const getProfile = async () => {
            const userInfo = await Auth.currentUserInfo();

            if (userInfo) {
                setUser(userInfo);
            } else {
                setUser(null)
            }
            setLoading(false)
        };

        getProfile();
    }, [user]);
    
    return { user, loading };
}