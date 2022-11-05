// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBouOjr9KSjuYrHX82khI-yXwDWYL09mr0",
  appName: "tricojams",
  authDomain: "tricojams-ea013.firebaseapp.com",
  projectId: "tricojams-ea013",
  storageBucket: "tricojams-ea013.appspot.com",
  messagingSenderId: "804216902940",
  appId: "1:804216902940:web:432f587a93ef53912ad6d9",
  measurementId: "G-VS2LQM6WK7",
  databaseURL: "https://tricojams-ea013.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export default app;
