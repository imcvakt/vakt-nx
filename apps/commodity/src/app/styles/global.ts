import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
  }
  body {
      background: #0B0C0E;
      color: #FFF;
      -webkit-font-smoothing: antialiased;
  }
  body, input, button {
      font-family: 'Helvetica Neue', serif;
      font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
      font-weight: 500;
  }
  button {
      cursor: pointer;
  }
  a {
    color: #FFF;
    text-decoration: none;
  }
`;
