import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100;9..40,200;9..40,300;9..40,400;9..40,500;9..40,600;9..40,700;9..40,800;9..40,900;9..40,1000&display=swap');

  html, body {
    font-family: 'DM Sans', sans-serif;
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
