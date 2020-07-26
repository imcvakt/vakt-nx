import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { Header } from '@vakt-web/shared/ui';

import { Routes } from './routes/routes';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 0px 32px 0px 32px;

  nav {
    padding-bottom: 16px;
    a {
      margin-right: 8px;
    }
  }
`;

export const App = () => {
  return (
    <>
      <Header />

      <Content>
        <nav>
          <Link to="/">
            <button style={{ border: 'none', color: '#FFF', width: '129px', height: '41px', background: '#399BF8'}}>
              Home
            </button>
          </Link>
          <Link to="logistics-home">
            <button style={{ border: 'none', color: '#FFF', width: '129px', height: '41px', background: '#399BF8'}}>
              Logistics
            </button>
          </Link>
        </nav>
        <Routes />
      </Content>

      <footer>
        <p>VAKT Global Ltd</p>
      </footer>
    </>
  );
};

export default App;
