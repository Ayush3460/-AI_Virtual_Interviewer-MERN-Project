
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-c25b3.firebaseapp.com",
  projectId: "interviewiq-c25b3",
  storageBucket: "interviewiq-c25b3.firebasestorage.app",
  messagingSenderId: "680860338311",
  appId: "1:680860338311:web:6792322763947b9c4f1022"
};


const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

const provider=new GoogleAuthProvider()
 
export{auth,provider}