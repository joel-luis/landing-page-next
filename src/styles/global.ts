import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyles = createGlobalStyle`
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
  font-family: ${theme.font.family.default}
 }

 h1, h2, h3, h4, h5, h6 {
  font-family: ${theme.font.family.secondary}
 }
`
export default GlobalStyles
