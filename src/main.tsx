import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    color-scheme: light;
  }

  body {
    min-height: 100vh;
    background:
      radial-gradient(circle at top, rgba(59, 130, 246, 0.18), transparent 34%),
      radial-gradient(circle at 80% 20%, rgba(20, 184, 166, 0.18), transparent 30%),
      linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%);
    font-family: 'Roboto', sans-serif;
    color: #0f172a;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  ::selection {
    background: rgba(59, 130, 246, 0.18);
  }

`;


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
)
