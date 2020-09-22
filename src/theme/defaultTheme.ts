import { DefaultTheme } from 'styled-components'

export const MainTheme: DefaultTheme = {
  borderRadius: '4px',
  breakpoints: {
      mobile: '375px',
      tablet: '768px',
      hd: '1024px',
      fullHD: '1920px',
  },  
  colors: {
    main: '#ffffff',
    second: '#000000',
    fonts: {
        main: '#000000',
        error: '#FF0000',
        hover: '#ffffff'
    },
    input: {
        background : '#F2F2F2',
        backgroundFocus: '#ffffff'
    }
  },
  fonts: {
      sizes: {
          mobile: 14,
          tablet: 16,
          desctop: 20,
      }
  },
  max: (breakpoint) => `@media (max-width: ${breakpoint})`,
  min: (breakpoint) => `@media (min-width: ${breakpoint})`
}