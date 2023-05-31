import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CurrencyProvider } from './components/CurrencyContext';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyC6oKMASQeqiF0zB-RxK4yuJSrcT7PrtUY',
    authDomain: 'hazel-grace-styles.firebaseapp.com',
    projectId: 'hazel-grace-styles',
    storageBucket: 'hazel-grace-styles.appspot.com',
    messagingSenderId: '1073819432626',
    appId: '1:1073819432626:web:46d702153b758aebaf3bab',
    measurementId: 'G-DS232NNWN1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CurrencyProvider>
            <App />
        </CurrencyProvider>
    </React.StrictMode>
);
