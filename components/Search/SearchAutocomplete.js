import React, { useState, useEffect, useRef, useCallback } from 'react'
import useGetAllMovies from '../../hooks/useGetAllMovies'

const SearchAutocomplete = () => {
    const { data, isLoading, isError } = useGetAllMovies()
    const [text, setText] = useState('')
    // const [suggestions, setSuggestions] = useState()
    const onChangeHandler = (text) => {
        let matches = []
        

        if (text.length > 3) {
            matches = data && data.Items.filter((item) => {
                const regex = new RegExp(`${text}`,"gi");
                let movie = item && item.movie_id.match(regex)
                return movie
            })
        }
        // console.log('matches',matches)
        // setSuggestions(matches)
        setText(text)
        // console.log(text)
    }

    return (
        <>
            <input aria-label="search" type="search" id="search" placeholder="Search" className="w-full bg-gray-800 text-gray-300 rounded-xl transition border border-transparent focus:outline-none focus:border-gray-700 py-3 px-2 pl-10 appearance-none leading-normal" />
            <div className="absolute search-icon" style={{ top: '1rem', left: '.8rem' }}>
                <svg className="fill-current pointer-events-none text-gray-300 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                </svg>
            </div></>
    )
}

export default SearchAutocomplete