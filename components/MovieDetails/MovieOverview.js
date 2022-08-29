import React from 'react'
import moment from 'moment'
import Image from 'next/image'

const MovieOverview = ({poster, tagline, overview, release_date, runtime, starrings, directors, writers}) => {
    return (
        <>
            <div className="text-white mt-36 md:mt-48 md:columns-2 mx-auto container w-10/12">
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
                    <p className="text-lg md:text-xl font-bold mb-5">
                        {tagline}
                    </p>
                    <p className="text-base md:text-lg mb-5 text-gray-300">
                        {overview}
                    </p>
                    <p className="text-sm mb-1 text-gray-400">
                        Release Date
                    </p>
                    <p className="text-base md:text-lg mb-5 text-gray-300">
                        {moment(release_date).format("MMMM Do YYYY")}
                    </p>
                    <p className="text-sm mb-1 text-gray-400">
                        Duration
                    </p>
                    <p className="text-base md:text-lg mb-5 text-gray-300">
                        {runtime} min
                    </p>
                    <p className="text-sm mb-1 text-gray-400">
                        Starrings
                    </p>
                    <p className="text-base md:text-lg mb-5 text-gray-300">
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
                    <p className="text-sm mb-1 text-gray-400">
                        Directed by
                    </p>
                    <p className="text-base md:text-lg mb-5 text-gray-300">
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
                    <p className="text-sm mb-1 text-gray-400">
                        Written by
                    </p>
                    <p className="text-base md:text-lg mb-5 text-gray-300">
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