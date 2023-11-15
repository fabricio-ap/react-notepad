import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-family: 'DM Sans', sans-serif;
    color: ${({ theme }) => theme.text};
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
    padding: 2px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #dcdfe3;
    border-radius: 5px;

    &:hover {
      background: #cdd0d4;
    }
  }

  ::-webkit-input-placeholder {
    font-family: 'DM Sans', sans-serif;
  }

  :-ms-input-placeholder {
    font-family: 'DM Sans', sans-serif;
  }

  :-moz-placeholder {
    font-family: 'DM Sans', sans-serif;
  }

  ::-moz-placeholder {
    font-family: 'DM Sans', sans-serif;
  }

  input[type="text"] {
    font-family: 'DM Sans', sans-serif;
  }
`;
