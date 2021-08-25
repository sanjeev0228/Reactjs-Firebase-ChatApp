import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';
//firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCa6jWNHOCJWpVWyh_xkvHDnNK5Y4JQNuY",
  authDomain: "chat-app-75861.firebaseapp.com",
  projectId: "chat-app-75861",
  storageBucket: "chat-app-75861.appspot.com",
  messagingSenderId: "672868064924",
  appId: "1:672868064924:web:fd2e20e8a2249e12979759",
  measurementId: "G-NKQ8TNKLL6"
};

firebase.initializeApp(firebaseConfig);

window.store = store;

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
