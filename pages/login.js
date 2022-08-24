import React from 'react'
import Head from 'next/head'
const LoginPage = () => {
    return (
        <>
            <Head>
                <title>EXSPER - Login</title>
                <meta name="description" content="Home to the movie experts" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
                <div className="max-w-lg mx-auto">
                    <a href="/">
                        <img src="./logo_text.png" width="50%" height="50%"/>
                    </a>
                </div>

                <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                    <section>
                        <h3 className="font-bold text-2xl">Welcome</h3>
                        <p className="text-gray-600 pt-2">Sign in to your account.</p>
                    </section>

                    <section className="mt-10">
                        <form className="flex flex-col">
                            <div className="mb-6 pt-3 rounded bg-gray-200">
                                <label className="block text-gray-700 text-sm mb-2 ml-3" for="email">Email</label>
                                <input type="text" id="email" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-primary-500 transition duration-500 px-3 pb-3" required/>
                            </div>
                            <div className="mb-6 pt-3 rounded bg-gray-200">
                                <label className="block text-gray-700 text-sm mb-2 ml-3" for="password">Password</label>
                                <input type="password" id="password" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-primary-500 transition duration-500 px-3 pb-3" required/>
                            </div>
                            <button className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" 
                            type="submit">Log In</button>
                        </form>
                    </section>
                </div>

                <div className="max-w-lg mx-auto text-center mt-12 mb-6">
                    <p className="text-white">Don't have an account? <a href="/register" className="font-bold hover:text-primary-100">Register here</a>.</p>
                </div>

                <div className="max-w-lg mx-auto flex justify-center text-white">
                    <a href="#" className="hover:text-primary-100">Contact</a>
                    <span className="mx-3">•</span>
                    <a href="#" className="hover:text-primary-100">Privacy</a>
                </div>
            </div>
        </>
    )
}

export default LoginPage