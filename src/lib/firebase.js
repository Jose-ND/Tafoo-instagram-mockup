import Firebase from 'firebase/app'; 
import 'firebase/firestore';
import 'firebase/auth';

// import the seed file here
    //this is not the initializer but we don't need it anymore
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyAHrAGjI1lamceq3hu2rmmeHKQ_IPPXqYw",
    authDomain: "tafoo-instagram-mock.firebaseapp.com",
    projectId: "tafoo-instagram-mock",
    storageBucket: "tafoo-instagram-mock.appspot.com",
    messagingSenderId: "493881453593",
    appId: "1:493881453593:web:f2a0d3adacd94ea11c8e88"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//call the seed file here (only once tho)
    //after you run this, STOP USING IT OR ELSE ITLL CREATE THE SAME DATA AGAIN IN GOOGLE FIREBASE
    //I will leave it here for educational purposes
// seedDatabase(firebase);



export { firebase, FieldValue }; 