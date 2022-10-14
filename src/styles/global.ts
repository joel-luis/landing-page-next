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

 body {
  background: ${theme.colors.mainBg};
  color: ${theme.colors.white};
 }
`
export default GlobalStyles
