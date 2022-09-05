import React from 'react'
import moment from 'moment'
import Image from 'next/image'


const MovieOverview = ({poster, tagline, overview, release_date, runtime, starrings, directors, writers}) => {
    
    return (
        <>
            <div className="container w-10/12 mx-auto text-white mt-36 md:mt-48 md:columns-2">
                <div className="hidden md:block">
                    <Image src={poster} className="poster"
                        alt={tagline}
                        quality={100}
                        width={480}
                        height={720}
                        objectFit="cover"
                        objectPosition="center"/>
                    {/* <img src={poster} className="poster"/> */}
                </div>
                <div>
                    <p className="mb-5 text-lg font-bold md:text-xl">
                        {tagline}
                    </p>
                    <p className="mb-5 text-base text-gray-300 md:text-lg">
                        {overview}
                    </p>
                    <p className="mb-1 text-sm text-gray-400">
                        Release Date
                    </p>
                    <p className="mb-5 text-base text-gray-300 md:text-lg">
                        {moment(release_date).format("MMMM Do YYYY")}
                    </p>
                    <p className="mb-1 text-sm text-gray-400">
                        Duration
                    </p>
                    <p className="mb-5 text-base text-gray-300 md:text-lg">
                        {runtime} min
                    </p>
                    <p className="mb-1 text-sm text-gray-400">
                        Starrings
                    </p>
                    <p className="mb-5 text-base text-gray-300 md:text-lg">
                        {
                            starrings &&
                            starrings.map((e, i) => {
                                if (i === starrings.length - 1) {
                                    return (
                                        <span key={e.id}>{e.name} </span>
                                    )
                                }
                                return (
                                    <span key={e.id}>{e.name} <i className="bi bi-dot"></i> </span>
                                );
                            })
                        }
                    </p>
                    <p className="mb-1 text-sm text-gray-400">
                        Directed by
                    </p>
                    <p className="mb-5 text-base text-gray-300 md:text-lg">
                        {
                            directors &&
                            directors.map((e, i) => {
                                if (i === directors.length - 1) {
                                    return (
                                        <span key={e.id}>{e.name} </span>
                                    )
                                }
                                return (
                                    <span key={e.id}>{e.name} <i className="bi bi-dot"></i> </span>
                                );
                            })
                        }
                    </p>
                    <p className="mb-1 text-sm text-gray-400">
                        Written by
                    </p>
                    <p className="mb-5 text-base text-gray-300 md:text-lg">
                        {
                            writers &&
                            writers.map((e, i) => {
                                if (i === writers.length - 1) {
                                    return (
                                        <span key={e.id}>{e.name} </span>
                                    )
                                }
                                return (
                                    <span key={e.id}>{e.name} <i className="bi bi-dot"></i> </span>
                                );
                            })
                        }
                    </p>
                </div>
            </div>
        </>
    )
}

export default MovieOverview