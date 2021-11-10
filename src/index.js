import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {themeConfig} from './themeConfig'; 
import { ThemeProvider } from '@mui/material/styles';


ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={themeConfig}>
        <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


