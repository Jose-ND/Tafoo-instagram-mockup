import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const Photos = ({photos}) => {
    return (
        <div className="h-16 border-t border-gray-primary mt-12 px-4 lg:px-0">
            <div className="grid grid-cols-3 mt-4 mb-12 gap-2 md:gap-8">
                {!photos ? (
                    <>
                        <Skeleton count={12} width={320} height={400} />
                    </>
                ) : photos.length > 0 ? (
                        photos.map((photo) => (
                            <div key={photo.docId} className="relative group">
                                {/* img tag below has complications when you try to resize square img to
                                rectangle img at media query break point*/}
                                <img src={photo.imageSrc} alt={photo.caption} className="w-auto square object-cover object-center"/>
                                <div className="absolute bottom-0 left-0 bg-gray-200 z-10 w-full 
                                    justify-evenly items-center h-full bg-black-faded group-hover:flex hidden cursor-pointer">
                                        <p className="flex items-center text-white font-bold">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="sm:w-8 w-4 mr-4"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            {photo.likes.length}
                                        </p>
                                        <p className="flex items-center text-white font-bold">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="sm:w-8 w-4 mr-4"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            {photo.comments.length}
                                        </p>
                                    </div>
                            </div>
                        ))
                ) : null}
            </div>
            {!photos || (photos.length === 0 && <p className="text-center text-2xl">No Posts</p>)}
        </div>
    )
}

Photos.propTypes = {
    photos: PropTypes.array.isRequired
}

export default Photos;
