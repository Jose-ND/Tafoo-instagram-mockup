import React, { useContext } from 'react';
import LoggedInUserContext from '../../context/logged-in-user';
import Suggestions from './suggestions';
import User from './user';

export default function Sidebar() {

  //------you must have useUser() or else it wont work
  const { 
    user: { docId = '', fullName, username, userId, following } = {} } = useContext(LoggedInUserContext);
  //--------------
  return (
    <div className="hidden md:block">
      <div className="fixed pr-4">
        <User username={username} fullName={fullName} />
        <Suggestions userId={userId} following={following} loggedInUserDocId={docId} />
      </div>
    </div>
  )
}