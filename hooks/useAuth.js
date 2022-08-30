

import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';

export default function useAuth() {

    const router = useRouter()

    const login = async (values) => {
        try {
            toast.success('🦄 Logged In successfully!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            const user = await Auth.signIn(values.email, values.password);
            window.location.href="/"
            console.log(user)
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