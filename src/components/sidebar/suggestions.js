import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { getSuggestedProfiles } from '../../services/firebase';
import SuggestedProfile from './suggested-profile';

const Suggestions = ({ userId, following, loggedInUserDocId }) => {
    const [profiles, setProfiles] = useState(null);

    useEffect(() => {
        async function suggestedProfiles() {
            const response = await getSuggestedProfiles(userId, following);
            setProfiles(response);
        }

        if (userId) {
            suggestedProfiles();
        }
    }, [userId])
    // go ahead and get the suggested porfiles 
    // hint: use th firebase service (call using userId)
    // getSuggestedProfiles
    // call the async function ^^^ within useEffect
    // stoer it in state
    // go ahead and render (wait on the profiles as in 'skeleton')
     
    return !profiles ? 
        <Skeleton count={10} height={150} className="mt-5" />
        :
        profiles.length > 0 ? (
            <div className="rounded flex flex-col">
                <div className="text-sm flex items-center align-items justify-between mb-2">
                    <p className="font-bold text-gray-base">Suggestions for you</p>
                </div>
                <div className="mt-4 grid gap-5">
                    {profiles.map((profile) => (
                        <SuggestedProfile 
                            key={profile.docId}
                            profileDocId={profile.docId}
                            username={profile.username}
                            profileId={profile.userId}
                            userId={userId}
                            loggedInUserDocId={loggedInUserDocId}
                        />
                    ))}
                </div>
            </div>
        ) 
        : null;    
}

export default Suggestions;

Suggestions.propTypes = {
    userId: PropTypes.string,
    following: PropTypes.array,
    loggedInUserDocId: PropTypes.string
}

