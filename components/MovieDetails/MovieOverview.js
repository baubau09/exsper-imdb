import React from 'react'
import moment from 'moment'
import Image from 'next/image'
import Loader from '../Loader'
import useGetCredits from '../../hooks/useGetCredits'

const CastCrewOverview = ({movieID}) => {
    const { data_castcrew, isLoading, isError } = useGetCredits(movieID)
    const crewArr = data_castcrew && data_castcrew.crew
    const castArr = data_castcrew && data_castcrew.cast
    const directors = crewArr && crewArr.filter((el) => el.job === "Director")
    const writers = crewArr && crewArr.filter((el) => el.department === "Writing")
    const starrings = castArr && castArr.filter((el) => el.order < 3)

    return (
        <>
            <Loader show={isLoading}></Loader>
            <p className="text-sm mb-1 text-gray-400">
                Starrings
            </p>
            <p className="text-lg mb-5 text-gray-300">
                {
                    starrings &&
                    starrings.map((e, i) => {
                        if (i === starrings.length - 1) {
                            return (
                                <span key={i}>{e.name} </span>
                            )
                        }
                        return (
                            <span key={i}>{e.name} <i className="bi bi-dot"></i> </span>
                        );
                    })
                }
            </p>
            <p className="text-sm mb-1 text-gray-400">
                Directed by
            </p>
            <p className="text-lg mb-5 text-gray-300">
                {
                    directors &&
                    directors.map((e, i) => {
                        if (i === directors.length - 1) {
                            return (
                                <span key={i}>{e.name} </span>
                            )
                        }
                        return (
                            <span key={i}>{e.name} <i className="bi bi-dot"></i> </span>
                        );
                    })
                }
            </p>
            <p className="text-sm mb-1 text-gray-400">
                Written by
            </p>
            <p className="text-lg mb-5 text-gray-300">
                {
                    writers &&
                    writers.map((e, i) => {
                        if (i === writers.length - 1) {
                            return (
                                <span key={i}>{e.name} </span>
                            )
                        }
                        return (
                            <span key={i}>{e.name} <i className="bi bi-dot"></i> </span>
                        );
                    })
                }
            </p>
        </>
    )
}

const MovieOverview = ({poster, tagline, overview, release_date, runtime, movieID}) => {
    return (
        <>
            <div className="text-white mt-36 md:mt-48 md:columns-2 mx-auto container w-10/12">
                <div className="hidden md:block">
                    <Image src={poster} className="poster"
                        alt={tagline}
                        quality={85}
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
                    <CastCrewOverview movieID={movieID}></CastCrewOverview>
                </div>
            </div>
        </>
    )
}

export default MovieOverview