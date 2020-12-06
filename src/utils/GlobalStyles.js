import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *
  {
      box-sizing:border-box;
      margin:0;
      padding:0;
  }

  body 
  {
    font-size:16px;
    min-height:100vh;
    max-width:100vw;
    word-wrap:break-word;
    overflow-wrap:break-word;
    background: ${ ( { theme } ) => theme.bodyBg };
    color: ${ ( { theme } ) => theme.bodyText };
    font-family: 'Cabin', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: background 0.40s ease,
                color 0.40s ease;
    will-change: background, color;

  }

  a
  {
    text-decoration:none;
    color: ${ ( { theme } ) => theme.bodyText };
  }

  button
  {
    cursor:pointer;
    user-select:none;
   
  }

  button:hover,
  button:active,
  a:active
  {
    outline-width: 1px ;
  }
  `;
