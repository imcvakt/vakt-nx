import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '@vakt-web/shared/util';
import App from './app/app';

ReactDOM.render( 
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter> 
  ,
  document.getElementById('root')
);
