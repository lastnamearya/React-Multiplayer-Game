import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ${'' /* Theme Background */}
  background: ${({ theme }) => theme.colors.background};

  @media only screen and (max-device-width: 500px) {
    ${({ theme }) =>
      theme.name === 'light' &&
      css`
        background-image: linear-gradient(180deg, hsla(0, 0%, 100%, 0) 60%, #fff),
          linear-gradient(70deg, #dbedff 32%, #ebfff0);
      `};
  }

 }

 code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
 }
  `;

export default GlobalStyles;
