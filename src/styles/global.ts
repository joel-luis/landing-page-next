import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Montserrat Regular'),
       url('/fonts/montserrat-regular.woff2') format('woff2')
}

@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: local('Montserrat Bold'),
       url('/fonts/montserrat-800.woff2') format('woff2')
}

@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: local('Montserrat Bold Italic'),
       url('/fonts/montserrat-800-italic.woff2') format('woff2')
}

@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: local('Montserrat Extra Bold'),
       url('/fonts/montserrat-900.woff2') format('woff2')
}

@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: local('Montserrat Extra Bold Italic'),
       url('/fonts/montserrat-900-italic.woff2') format('woff2')
}

@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Open Sans Regular'),
       url('/fonts/open-sans-regular.woff2') format('woff2')
}

@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Open Sans Bold'),
       url('/fonts/open-sans-700.woff2') format('woff2')
}

@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Open Sans Bold Italic'),
       url('/fonts/open-sans-700-italic.woff2') format('woff2')
}

 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &::before,
  &::after {
    box-sizing: inherit;
  }
 }

 html {
  font-size: 62.5%;
 }

 body {
  background: ${theme.colors.mainBg};
  color: ${theme.colors.white};
  font-size: 1.6rem;
  font-family: 'Open Sans', sans-serif;
 }

 h1 {
  font-family: 'Montserrat', sans-serif;
 }
`
export default GlobalStyles
