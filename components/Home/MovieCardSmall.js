import React from 'react'
import Image from "next/image"

const MovieCardSmall = ({id, title, rating, poster}) => {
    const posterpath = "https://image.tmdb.org/t/p/original/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
    const bg = 'linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, rgba(29, 29, 29, 0.8) 80.79%), url(' + posterpath + ')'
    return (
        <>
            <div style={{ background: bg, backgroundSize: 'cover', backgroundPositionX: 'center', width: 292, height: 440, borderRadius: 20 }} className="text-white mx-auto overflow-hidden">
                <div style={{ width: 292, height: 440}} className="">
                    <div className="px-6" style={{paddingTop: '100%'}}>
                            <p className="mb-4 border-transparent border-gray-500 rounded-xl w-fit text-sm bg-gray-400 bg-opacity-10 px-3 py-2 backdrop-blur-lg text-warning-500">
                                <i className="bi bi-star-fill text-sm"></i> 4.5
                            </p>
                        <h4 className="text-2xl text-truncate homecard_title">Wonder Woman: 1984</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieCardSmall