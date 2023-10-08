// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2S8bXs_ui4wRDk3Ozq9-HP20ojBSxLdI",
  authDomain: "event-management-react.firebaseapp.com",
  projectId: "event-management-react",
  storageBucket: "event-management-react.appspot.com",
  messagingSenderId: "1006578041498",
  appId: "1:1006578041498:web:4cb303ecce1784b1cc1523"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;