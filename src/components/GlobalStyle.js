import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
  }

  a {
    text-decoration: none;
    color: #34495e;
  }
`;

export default GlobalStyle;
