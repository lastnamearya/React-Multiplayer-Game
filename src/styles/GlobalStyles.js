import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


 }

 code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
 }
  `;

export default GlobalStyles;

// background: white;
//     background: linear-gradient(to right, #7EE8F9, #80ff72);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     -webkit-box-decoration-break: clone;
//     box-decoration-break: clone;
//     text-shadow: none;
