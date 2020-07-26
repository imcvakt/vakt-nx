import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

import GlobalStyles from './app/styles/global';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <GlobalStyles />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
