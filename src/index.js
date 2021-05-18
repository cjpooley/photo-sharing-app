import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import 'firebase/analytics';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCCmuzSABDPvMmxDTQMUU0oVl4-uAHnox0",
  authDomain: "photo-sharing-app-ed43e.firebaseapp.com",
  projectId: "photo-sharing-app-ed43e",
  storageBucket: "photo-sharing-app-ed43e.appspot.com",
  messagingSenderId: "968176746039",
  appId: "1:968176746039:web:8f1946c0093f19556d49b2",
  measurementId: "G-K1QXS9M25N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
