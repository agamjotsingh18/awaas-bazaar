// firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCkXig-yXy0uZtNlmtUhdYbGhLWJe6cEyM",
  authDomain: "awaaz-bazaar.firebaseapp.com",
  projectId: "awaaz-bazaar",
  storageBucket: "awaaz-bazaar.appspot.com",
  messagingSenderId: "625933865615",
  appId: "1:625933865615:web:e15f2e236dedd05228d6fa",
  measurementId: "G-2P1CQV332K"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;