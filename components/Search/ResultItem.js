import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ResultItem = ({ poster, id, title }) => {
    const posterpath = "https://image.tmdb.org/t/p/original/" + poster
    const mvLink = "/movie/" + id

    return (
        <>
            <Link href={mvLink}>
                <a>
                    <div className="flex">
                        <div className="movie_search_card my-auto">
                            <img src={posterpath}
                                alt={title}
                                className="mx-auto mt-3 movie_search_img" />
                            <h4 className="text-white text-base mx-auto mt-2 w-fit h-fit text-truncate movie_search_title">
                                {title}
                            </h4>
                        </div>
                    </div>
                </a>
            </Link>
        </>
    )
}

export default ResultItem