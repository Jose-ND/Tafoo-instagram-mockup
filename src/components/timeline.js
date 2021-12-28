// import React from 'react';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import usePhotos from '../hooks/use-photos';
// import Post from './post';

// const Timeline = () => {
//     // user photos (of logged in)
//     const { photos } = usePhotos();
//     // on loading the photos, we need to use react skeleton
//     // if we have photos, render them (create a post component)
//     // if the user has no photos, tell them to create some photos
//     return (
//         <div className="container col-span-2">
//             {!photos ? (
//                 <Skeleton count={2} width={640} height={500} className="mb-5"/>
//             ) : photos?.length > 0 ? (
//                 photos.map((content) => <Post key={content.docId} content={content} />)
//             ) : (
//                 <p className="text-center text-2xl">Follow people to see photos</p>
//             )}
//         </div>
//     )
// }

// export default Timeline;

//-----------------

import { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import LoggedInUserContext from '../context/logged-in-user';
import usePhotos from '../hooks/use-photos';
import Post from './post';

export default function Timeline() {
  const { user } = useContext(LoggedInUserContext);

//   const { user: { following } = {} } = useContext(
//     LoggedInUserContext
//   );

  const { photos } = usePhotos(user);
 

  return (
    <div className="container col-span-2">
        {!photos ? (
            <Skeleton count={2} width={640} height={500} className="mb-5"/>
        ) : photos?.length > 0 ? (
            photos.map((content) => <Post key={content.docId} content={content} />)
        ) : (
            <p className="text-center text-2xl">Follow people to see photos</p>
        )}
    </div>
  );
}