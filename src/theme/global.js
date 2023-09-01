import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    height: -webkit-fill-available;
  }

  #root,
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    min-height: -webkit-fill-available; /* mobile viewport bug fix */
    height: 100%;
    width: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 100%;
    line-height: 1.5;
    color: ${({ theme }) => theme.main.text};
    background-color: ${({ theme }) => theme.main.background};
    overflow-y: auto;
    overflow-x: auto;
    scroll-behavior: smooth;
    transition: all 0.45s ease;
  }

  ::selection {
    background-color: ${({ theme }) => theme.main.selection};
  }

  button {
    padding: 0;
    border: 0;
    outline: none;
    background: none;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  a {
    color: rebeccapurple;
    text-decoration: none;
    transition: all 0.15s ease;

    &:hover {
      box-shadow: 0 1px 0 rebeccapurple;
    }
  }

  small {
    font-size: 0.815em;
    font-weight: 400;
    line-height: 1.25;
    letter-spacing: 0.025em;
    color: #bbbbbb;
  }
`;
