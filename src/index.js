import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {themeConfig} from './themeConfig'; 
import { ThemeProvider } from '@mui/material/styles';
// Firebase-
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAMr-hU-h_C4HnYODAARAu9ehb_p8t7uoU",
  authDomain: "myshop-8b686.firebaseapp.com",
  projectId: "myshop-8b686",
  storageBucket: "myshop-8b686.appspot.com",
  messagingSenderId: "1009866489768",
  appId: "1:1009866489768:web:6648c2e851affb7d57279d"
};
const app = initializeApp(firebaseConfig);
// Firebase -

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={themeConfig}>
        <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


