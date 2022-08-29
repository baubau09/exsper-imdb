import { useEffect, useState } from 'react';
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";

export function useUserData() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const getProfile = async () => {
            const userInfo = await Auth.currentUserInfo();

            if (userInfo) {
                setUser(userInfo);
            } else {
                setUser(null)
            }
        };

        getProfile();
    }, [user]);
    
    return { user };
}