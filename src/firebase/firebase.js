import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
    apiKey: 'AIzaSyAOCKMo9LWlI4vdzEWYPJRlErMYfhggfRQ',
    authDomain: 'uploading-3c9d5.firebaseapp.com',
    projectId: 'uploading-3c9d5',
    storageBucket: 'uploading-3c9d5.appspot.com',
    messagingSenderId: '586691161766',
    appId: '1:586691161766:web:3ebd1a3698cc9359b80e67',
    measurementId: 'G-HLYFX2FMP0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
