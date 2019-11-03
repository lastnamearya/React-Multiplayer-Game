import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ${'' /* Theme Background */}
  background: ${({ theme }) => theme.colors.background};

 }

 code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
 }
  `;

export default GlobalStyles;
