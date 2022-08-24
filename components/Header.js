import React from 'react'
import { useRouter } from 'next/router'

const Header = () => {
    const router = useRouter()

    return (
        <>
            <header>
                <nav aria-label="menu nav" className="pt-2 md:pt-1 pb-1 px-1 h-auto fixed w-full z-20 top-0 bg-opacity-75 bg-gray-900">
                    <div className="flex flex-wrap items-center">
                        <div className="ml-2 flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
                            <a href="/" aria-label="Home">
                                <img src="./logo_text.png" width="50%" height="50%"/>
                            </a>
                        </div>

                        <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
                            <span className="relative w-full">
                                <input aria-label="search" type="search" id="search" placeholder="Search" className="w-full bg-gray-800 text-gray-300 rounded-xl transition border border-transparent focus:outline-none focus:border-gray-700 py-3 px-2 pl-10 appearance-none leading-normal"/>
                                    <div className="absolute search-icon" style={{top: '1rem', left: '.8rem'}}>
                                        <svg className="fill-current pointer-events-none text-gray-300 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                                        </svg>
                                    </div>
                            </span>
                        </div>

                        <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
                            <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                                <button className="rounded-xl bg-primary-400 hover:bg-primary-500
                                w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium text-white md:py-3 md:px-6 mx-3 transition-colors"
                                type="button" onClick={() => router.push('/login')}>Login</button>
                                <button className="rounded-xl bg-gray-700 hover:bg-gray-800
                                w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium text-white md:py-3 md:px-6 mx-3 transition-colors"
                                type="button" onClick={() => router.push('/register')}>Register</button>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header