// import { useState, useEffect, useContext } from 'react';
// import UserContext from '../context/user';
// import { getUserByUserId } from '../services/firebase';


// export default function useUser() {
//   const [activeUser, setActiveUser] = useState({});
//   const { user } = useContext(UserContext);

//   useEffect(() => {
//     async function getUserObjByUserId() {
//       const [response] = await getUserByUserId(user.uid);
//       setActiveUser(response);
//     }

//     if (user?.uid) {
//       getUserObjByUserId();
//     }
//   }, [user]);

//   return { user: activeUser };
// }

//-----------------

import { useState, useEffect, useContext } from 'react';
import { getUserByUserId } from '../services/firebase';


export default function useUser(userId) {
  const [activeUser, setActiveUser] = useState({});

  useEffect(() => {
    async function getUserObjByUserId(userId) {
      const [user] = await getUserByUserId(userId);
      setActiveUser(user || {});
    }

    if (userId) {
      getUserObjByUserId(userId);
    }
  }, [userId]);

  return { user: activeUser };
}