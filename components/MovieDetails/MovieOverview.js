import React, { useEffect, useState } from "react";
import moment from "moment";
import Image from "next/image";
import Loader from "../Loader";
import useGetCredits from "../../hooks/useGetCredits";
import Rating from "@mui/material/Rating";
import { StarBorderRounded, StarRateRounded } from "@mui/icons-material";
import { useUserData } from "../../hooks/useUserData";
import { toast } from "react-toastify";
import { Auth, Amplify, Analytics } from "aws-amplify";

const CastCrewOverview = ({ movieID }) => {
    const { data_castcrew, isLoading, isError } = useGetCredits(movieID);
    const crewArr = data_castcrew && data_castcrew.crew;
    const castArr = data_castcrew && data_castcrew.cast;
    const directors = crewArr && crewArr.filter((el) => el.job === "Director");
    const writers = crewArr && crewArr.filter((el) => el.department === "Writing");
    const starrings = castArr && castArr.filter((el) => el.order < 3);

    return (
        <>
            <Loader show={isLoading}></Loader>
            <p className="text-sm mb-1 text-gray-400">Starrings</p>
            <p className="text-lg mb-5 text-gray-200">
                {starrings &&
                    starrings.map((e, i) => {
                        if (i === starrings.length - 1) {
                            return <span key={i}>{e.name} </span>;
                        }
                        return (
                            <span key={i}>
                                {e.name} <i className="bi bi-dot"></i>{" "}
                            </span>
                        );
                    })}
            </p>
            <p className="text-sm mb-1 text-gray-400">Directed by</p>
            <p className="text-lg mb-5 text-gray-200">
                {directors &&
                    directors.map((e, i) => {
                        if (i === directors.length - 1) {
                            return <span key={i}>{e.name} </span>;
                        }
                        return (
                            <span key={i}>
                                {e.name} <i className="bi bi-dot"></i>{" "}
                            </span>
                        );
                    })}
            </p>
            <p className="text-sm mb-1 text-gray-400">Written by</p>
            <p className="text-lg mb-5 text-gray-200">
                {writers &&
                    writers.map((e, i) => {
                        if (i === writers.length - 1) {
                            return <span key={i}>{e.name} </span>;
                        }
                        return (
                            <span key={i}>
                                {e.name} <i className="bi bi-dot"></i>{" "}
                            </span>
                        );
                    })}
            </p>
        </>
    );
};

const MovieOverview = ({ poster, tagline, overview, release_date, runtime, movieID, rating }) => {
    const [ratingValue, setRatingValue] = useState(0);
    const apiurl = "https://l9r8bafvh6.execute-api.ap-southeast-1.amazonaws.com/test/movies/rate";
    const { user, isLoading } = useUserData();

    const postRateMovie = (newRatingValue) => {
        const data = {
            movie_id: movieID,
            user_id: user["custom:USER_ID"],
            rating: newRatingValue,
        };
        fetch(apiurl, {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                toast.success("🌟 Thank you for your rating", {
                    position: "top-center",
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
                console.log("Success:", data);
            })
            .catch((e) => {
                const err = "" + e;
                toast.error(err, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
                console.error("Error:", e);
            });
    };

    useEffect(() => {
        const runAnalytics = async () => {
            const currentUser = await Auth.currentAuthenticatedUser();
            console.log(currentUser)
            if (currentUser) {
                Analytics.record(
                    {
                        data: {
                            EventType: "clicked",
                            UserId: currentUser.attributes["custom:USER_ID"],
                            SessionId: "",
                            ItemId: movieID,
                        },
                        streamName: "amplifyAnalyticsExsper-staging", 
                    },
                    "AWSKinesis"
                );
            }
            
        }
        runAnalytics()
    }, [])
    
        
    

    return (
        <>
            <div className="text-white mt-36 md:mt-48 md:columns-2 mx-auto container w-10/12">
                <div className="hidden md:block">
                    <Image
                        src={poster}
                        className="poster"
                        alt={tagline}
                        quality={85}
                        width={480}
                        height={720}
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
                <div>
                    <div>
                        <p className="text-lg md:text-xl font-bold mb-5">{tagline}</p>
                        <p className="text-base md:text-lg mb-5 text-gray-200">{overview}</p>
                        <p className="text-sm mb-1 text-gray-400">Release Date</p>
                        <p className="text-base md:text-lg mb-5 text-gray-200">
                            {moment(release_date).format("MMMM Do YYYY")}
                        </p>
                        <p className="text-sm mb-1 text-gray-400">Duration</p>
                        <p className="text-base md:text-lg mb-5 text-gray-200">{runtime} min</p>
                        <CastCrewOverview movieID={movieID}></CastCrewOverview>
                    </div>
                    <hr className="mt-10 border-gray-600" />
                    <div className="mt-5 rounded-2xl bg-gray-600 bg-opacity-50 w-fit px-5 py-5 backdrop-blur-xl">
                        <p className="text-lg md:text-xl font-bold mb-1">Rate this movie</p>
                        <div className="flex justify-center">
                            {user && !isLoading ? (
                                <>
                                    <Rating
                                        name="simple-controlled"
                                        value={ratingValue}
                                        onChange={(event, newValue) => {
                                            setRatingValue(newValue);
                                            postRateMovie(newValue);
                                        }}
                                        precision={0.5}
                                        icon={<StarRateRounded />}
                                        emptyIcon={<StarBorderRounded className="text-gray-400" />}
                                    />
                                </>
                            ) : (
                                <p>Please login to rate this movie</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieOverview;
