

import { Auth } from "aws-amplify";
import { useRouter } from "next/router";

export default function useAuth() {

    const router = useRouter()

    const login = async (values) => {
        try {
            const user = await Auth.signIn(values.email, values.password);
            console.log(user)
            router.replace("/")
        } catch (error) {
            console.log('error signing in', error);
        }
    }

    const logout = async () => {
        try {
            await Auth.signOut();
            router.push("/")
            console.log('user Signed out');
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    // const resetPasswordRequest = (values, { setSubmitting }) => {
    //     fetch('/api/password/reset_code', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(values)
    //     }).then(res => {
    //         if (!res.ok) throw res
    //         router.push({
    //             pathname: '/password/reset',
    //             query: { username: values.username }
    //         },
    //             "/password/reset")
    //     }).catch(err => {
    //         console.error(err)
    //     }).finally(() => {
    //         setSubmitting(false)
    //     })
    // }

    // const resetPassword = (values, { setSubmitting }) => {
    //     fetch('/api/password/reset', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(values)
    //     }).then(res => {
    //         if (!res.ok) throw res
    //         router.push({
    //             pathname: '/login',
    //             query: { reset: true }
    //         },
    //             "/login")
    //     }).catch(err => {
    //         console.error(err)
    //     }).finally(() => {
    //         setSubmitting(false)
    //     })
    // }

    return {
        login,
        logout
    }
}