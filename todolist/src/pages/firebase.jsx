import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBq3q4SCf5ffP812T0n8rBJ7nN8o1ZOmWQ',
  authDomain: 'fir-siva-auth.firebaseapp.com',
  projectId: 'fir-siva-auth',
  storageBucket: 'fir-siva-auth.appspot.com',
  messagingSenderId: '926387075004',
  appId: '1:926387075004:web:f2b4640c37e07687911db9',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
