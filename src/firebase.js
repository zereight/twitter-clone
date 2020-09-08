import * as firebase from "firebase/app";
import * as config from "./env";
const firebaseConfig = {
  apiKey: config.REACT_APP_APIKEY,
  authDomain: config.REACT_APP_AUTHDOMAIN,
  databaseURL: config.REACT_APP_DATABASEURL,
  projectId: config.REACT_APP_PROJECTID,
  storageBucket: config.REACT_APP_STORAGEBUCKET,
  messagingSenderId: config.REACT_APP_MESSAGINGSENDERID,
  appId: config.REACT_APP_MESSAGINGSENDERID,
  measurementId: config.REACT_APP_MEASUREMENTID,
};
// console.log(firebaseConfig);
// Initialize Firebase
// firebase.analytics();
export default firebase.initializeApp(firebaseConfig);
