/// <reference types="react-scripts" />

import {ApplicationState} from '@store/configs'
import 'styled-components';

type tablet = '768px';
type hd = '1024px';
type fullHD = '1920px';
type mobile = '375px'

type resolution = tablet | hd | fullHD | mobile



// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    breakpoints: {
      mobile: mobile,
      tablet: tablet,
      hd: hd
      fullHD: fullHD,
    },  
    colors: {
      main: string;
      second: string;
      fonts: {
          main: string;
          error: string;
          hover: string;
      },
      input: {
          background : string;
          backgroundFocus: string
      }
    },
    fonts: {
        sizes: {
            mobile: number;
            tablet: number;
            desctop: number;
        }
    }
    max(resolution : resolution) : string;
    min(resolution : resolution) : string;
  }
}

declare module 'react-redux' {
    interface DefaultRootState extends ApplicationState {}
}
