export default {
  border: {
    radius: '0.4rem'
  },
  font: {
    family: {
      default: 'Inter, sans-serif',
      secondary: "'Montserrat', sans-serif"
    },
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '0.8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem'
    }
  },
  media: {
    lessThanMedium: '(max-width: 768px)'
  },
  colors: {
    primary: '#F231A5',
    secondary: '#3CD3C1',
    mainBg: '#06092B',
    lightBg: '#F2F2F2',
    white: '#FAFAFA',
    black: '#030517',
    lightGray: '#EAEAEA',
    gray: '#8F8F8F',
    darkGray: '#2E2F42',
    red: '#FF6347'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  transition: {
    default: '0.2s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
