import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider , createTheme  } from  '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary:{
      main: '#212121'
    }
  },
});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider >
  </React.StrictMode>,
  document.getElementById('root')
);


