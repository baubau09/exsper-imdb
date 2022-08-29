import { useRouter } from 'next/router'
import { Auth } from 'aws-amplify';

export default function useRegister() {

	const router = useRouter()

	const signup = async (values) => {
		try {
            const { user } = await Auth.signUp({
                username: values.email,
                password: values.password,
                attributes: {
                    'custom:full_name': values.name
                }
            });
            console.log(user);
        } catch (error) {
            console.log('error signing up:', error);
        }
	}

	// const confirm = (values, { setSubmitting }) => {
	// 	fetch('/api/confirm', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify(values)
	// 	}).then(res => {
	// 		if (!res.ok) throw res
	// 		router.push({
	// 			pathname: '/login',
	// 			query: { confirmed: true }
	// 		},
	// 			"/login")
	// 	}).catch(err => {
	// 		console.error(err)
	// 	}).finally(() => {
	// 		setSubmitting(false)
	// 	})
	// }

	return {
		signup
	}
}