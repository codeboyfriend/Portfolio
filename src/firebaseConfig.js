import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAX36bhWyQIcPLX0afT-fP-4_sjwedAqgw",
  authDomain: "codeboyfriend-a6be7.firebaseapp.com",
  projectId: "codeboyfriend-a6be7",
  storageBucket: "codeboyfriend-a6be7.appspot.com",
  messagingSenderId: "435990596761",
  appId: "1:435990596761:web:03257149bd63a48915fc08",
  measurementId: "G-FGXPS4DE1F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);