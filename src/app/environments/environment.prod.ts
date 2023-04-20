export const environment = {
    production: true
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR32rjzbAsqgO3QQbH-90QT5PZ92EKrik",
  authDomain: "snapchat-app-c7b84.firebaseapp.com",
  databaseURL: "https://snapchat-app-c7b84-default-rtdb.firebaseio.com",
  projectId: "snapchat-app-c7b84",
  storageBucket: "snapchat-app-c7b84.appspot.com",
  messagingSenderId: "1098897196099",
  appId: "1:1098897196099:web:681af540d9558ae82d00f6",
  measurementId: "G-Q6YCNKMR76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);