import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button {
  border: none;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  background: #0B63F6;
  box-shadow: 0 5px 0 #003CC5;
}

button:hover {
  background: #003CC5;
  box-shadow: none;
  position: relative;
  top: 5px;
  cursor: pointer;
}

button:active {
  background: #003CC5;
  box-shadow: none;
  position: relative;
  top: 5px;
  scale: 0.9;
}
`;

export default GlobalStyle;
