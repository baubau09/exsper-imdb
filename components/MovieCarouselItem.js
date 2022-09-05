import Image from "next/image";
import Analytics from "@aws-amplify/analytics";

const MovieCarouselItem = ({ title, description, img, rating, link }) => {
    return (
        <>
            <div className="float-left w-full carousel-item">
                <a href={link}>
                    <Image
                        src={img}
                        className="block w-full carousel-overlay"
                        alt={title}
                        width={1700}
                        height={648}
                        quality={100}
                        objectFit="cover"
                        objectPosition="center"
                    />

                    <div className="absolute hidden py-5 mb-2 carousel-caption md:block bottom-5 lg:mb-20 lg:pr-40pct xl:pr-40pct">
                        <p className="px-3 py-2 text-lg bg-gray-800 bg-opacity-50 border-transparent border-gray-500 rounded-xl w-fit backdrop-blur-lg text-warning-500">
                            <i className="text-lg bi bi-star-fill"></i> {rating}
                        </p>
                        <h1 className="mb-2 text-5xl xl:text-6xl">{title}</h1>
                        <p>{description}</p>
                        <button
                            className="flex px-5 py-3 mt-2 text-base font-medium text-white transition-colors border border-transparent rounded-xl bg-primary-400 hover:bg-primary-300 w-fit"
                            type="button"
                            href={link}
                        >
                            <img src="./watch_icon.svg" />
                            &nbsp;Watch trailer
                        </button>
                    </div>

                    <div className="absolute bottom-0 block py-0 carousel-caption md:hidden mb-9">
                        <h1 className="text-md">{title}</h1>
                    </div>
                </a>
            </div>
        </>
    );
};

export default MovieCarouselItem;
