import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB1WaSAA-47-tG2UaWbq3rg2ftgHilcVT0",
  authDomain: "twitter-clone-24e37.firebaseapp.com",
  databaseURL: "https://twitter-clone-24e37.firebaseio.com",
  projectId: "twitter-clone-24e37",
  storageBucket: "twitter-clone-24e37.appspot.com",
  messagingSenderId: "258462755345",
  appId: "1:258462755345:web:4321b32ad6f20068de5fb0",
  measurementId: "G-CPNSJYD17Z",
};

// Initialize Firebase
firebase.analytics();
export default firebase.initializeApp(firebaseConfig);
