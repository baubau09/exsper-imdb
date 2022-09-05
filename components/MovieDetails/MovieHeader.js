import React from "react";
import { Amplify, Analytics } from "aws-amplify";

const MovieHeader = ({ bg, title, year, rating, genres }) => {
    Analytics.record(
        {
            data: {
                eventType: "MovieView",
                //TODO: Get user ID here
                // userId: user.attributes.sub,
                year: year,
                title: title,
                genres: genres,
                rating: rating,
                timestamp: new Date(),
            },
            streamName: "", //TODO: Set to Kinesis Stream Name, and it has to include environment name too, e.g.: 'traveldealsKinesis-dev'
        },
        "AWSKinesis"
    );

    return (
        <>
            <div
                className="w-10/12 mx-auto text-white xs:mt-44 md:mt-32 backdrop"
                style={{ background: bg, backgroundSize: "cover", backgroundPositionX: "center" }}
            >
                <div className="backdrop" style={{ display: "hidden" }} />
                <div className="relative movie-detail-title w-fit h-fit">
                    <h1 className="px-8 py-8 text-xl md:text-4xl md:px-12 md:py-12">
                        <span className="text-base font-medium text-warning-500 font-primary">
                            <i className="text-lg bi bi-star-fill"></i> {rating}
                        </span>
                        <br />
                        {title} <span className="font-medium text-gray-300">({year})</span>
                        <br />
                        <span className="text-sm font-medium text-gray-300 md:text-base font-primary">
                            {genres &&
                                genres.map((e, i) => {
                                    if (i === genres.length - 1) {
                                        return <span key={e.id}>{e.name} </span>;
                                    }
                                    return (
                                        <span key={e.id}>
                                            {e.name} <i className="bi bi-dot"></i>{" "}
                                        </span>
                                    );
                                })}
                        </span>
                    </h1>
                </div>
            </div>
        </>
    );
};

export default MovieHeader;
