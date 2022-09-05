import React from 'react'
import { useRouter } from 'next/router'
import useAuth from '../hooks/useAuth';
import { UserContext } from '../lib/context';
import { useState, useContext } from 'react';


const Header = () => {
    const router = useRouter()
    const { user } = useContext(UserContext);
    const {logout} = useAuth()

    return (
        <>
            <header>
                <nav aria-label="menu nav" className="fixed top-0 z-20 w-full h-auto px-1 pt-2 pb-4 bg-gray-900 bg-opacity-75 md:pt-1">
                    <div className="flex flex-wrap items-center">
                        <div className="flex justify-center flex-shrink ml-2 text-white md:w-1/3 md:justify-start">
                                <img src="/logo_text.png" width="50%" height="50%" onClick={() => window.location.href = "/"} style={{cursor: 'pointer'}}/>
                        </div>
                        <div className="flex justify-center flex-1 px-2 pt-2 text-white md:w-1/3 md:justify-start">
                            <span className="relative w-full">
                                <input aria-label="search" type="search" id="search" placeholder="Search" className="w-full px-2 py-3 pl-10 leading-normal text-gray-300 transition bg-gray-800 border border-transparent appearance-none rounded-xl focus:outline-none focus:border-gray-700"/>
                                    <div className="absolute search-icon" style={{top: '1rem', left: '.8rem'}}>
                                        <svg className="w-4 h-4 text-gray-300 pointer-events-none fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                                        </svg>
                                    </div>
                            </span>
                        </div>
                        <div className="flex content-center justify-between w-full pt-2 md:w-1/3 md:justify-end">
                            {user ? 
                            
                            <button className="flex items-center justify-center px-6 py-2 mx-3 text-base font-medium text-white transition-colors border border-transparent rounded-xl bg-primary-400 hover:bg-primary-500 w-fit md:py-3 md:px-6"
                                type="button" onClick={() => logout()}>Sign Out</button>
                            : 
                            <ul className="flex items-center justify-between flex-1 list-reset md:flex-none">
                                <button className="flex items-center justify-center w-full px-6 py-2 mx-3 text-base font-medium text-white transition-colors border border-transparent rounded-xl bg-primary-400 hover:bg-primary-500 md:py-3 md:px-6"
                                type="button" onClick={() => router.push('/login')}>Login</button>
                                <button className="flex items-center justify-center w-full px-6 py-2 mx-3 text-base font-medium text-white transition-colors bg-gray-700 border border-transparent rounded-xl hover:bg-gray-800 md:py-3 md:px-6"
                                type="button" onClick={() => router.push('/register')}>Register</button>
                            </ul> 
                        }
                            
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header