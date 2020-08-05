import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@vakt-web/shared/util';

import App from './app/app';

import GlobalStyles from './app/styles/global';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
      <GlobalStyles />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
