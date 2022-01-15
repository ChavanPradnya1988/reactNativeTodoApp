import * as firebase from "firebase/app";

// Add the Firebase services to use

import "firebase/auth";

// app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAN8pbO06PBkK-O4H9MJwMNne8ZghUoKn4",
  authDomain: "todo-rn-4c31a.firebaseapp.com",
  databaseURL: "https://todo-rn-4c31a-default-rtdb.firebaseio.com",
  projectId: "todo-rn-4c31a",
  storageBucket: "todo-rn-4c31a.appspot.com",
  messagingSenderId: "151862621325",
  appId: "1:151862621325:web:5d14b79edb5bdc03f75ec4",
  measurementId: "G-0JY38SNXC2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Finally, export it to use it throughout your app
export default firebase;