import React from "react";
import { Amplify, Analytics } from "aws-amplify";

const MovieHeader = ({ id ,bg, title, year, rating, genres }) => {
    // console.log("MovieHeader");
    fetchData();
    async function fetchData() {
        console.log("fetchData");
        const data = fetch("https://z1hi6ssas5.execute-api.ap-southeast-1.amazonaws.com/getPersonalize?userId=1&numResults=4")
        .then(data => data.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
        // console.log(json);
    }

    Analytics.record(
        {
            data: {
                EventType: "clicked",
                //TODO: Get user ID here
                // userId: user.attributes.sub,
                UserId: "1",
                SessionId: "2",
                ItemId: id,
                // Event: {
                    
                //     // movieTitle: title,
                //     // movieYear: year,
                //     // movieGenres: genres,
                //     // movieRating: rating
                // }
            },
            streamName: "movieRecEx", //TODO: Set to Kinesis Stream Name, and it has to include environment name too, e.g.: 'traveldealsKinesis-dev'
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
