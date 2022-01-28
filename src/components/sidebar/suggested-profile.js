import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { updateFollowedUserFollowers, updateLoggedInUserFollowing } from '../../services/firebase';


const SuggestedProfile = ({ profileDocId, username, profileId, userId, loggedInUserDocId }) => {
    const [followed, setFollowed] = useState(false);

    async function handleFollowUser() {
        setFollowed(true);

        // firebase: create 2 services (functions)
        //update the following array of the logged in user
        await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false); //you pass false just in case
        //update the followers array of the user who has been followed
        await updateFollowedUserFollowers(profileDocId, userId, false);
    }

    return !followed ? (
        <div className="flex flex-row items-center align-items justify-between">
            <div className="flex items-center justify-between">
                <img src={`/images/avatars/${username}.jpg`} alt="" className="rounded-full w-8 flex mr-3" />
                <Link to={`/p/${username}`}>
                    <p className="font-bold text-sm">
                        {username}
                    </p>
                </Link>
            </div>
            <div>
                <button 
                    className="text-xs font-bold text-purple-500 hover:text-purple-800 transition ease-out duration-100"
                    type="button"
                    onClick={handleFollowUser}
                >
                    Follow
                </button>
            </div>
        </div>
    ) : null;
}

export default SuggestedProfile;

SuggestedProfile.propTypes = {
    profileDocId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profileId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    loggedInUserDocId: PropTypes.string.isRequired

}