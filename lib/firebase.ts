import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBa7CUaXKU9vo9_E92CAFLwiwEHW60R0yg',
  authDomain: 'wordnest-english-vocab.firebaseapp.com',
  projectId: 'wordnest-english-vocab',
  storageBucket: 'wordnest-english-vocab.firebasestorage.app',
  messagingSenderId: '605822510451',
  appId: '1:605822510451:web:618a9b05a4f6b1d7b49106',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
