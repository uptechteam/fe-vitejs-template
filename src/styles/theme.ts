// TODO: Udpdate this file according to the designs of the project
import { createTheme } from '@mui/material';

// import { CSSProperties } from 'react';
import { breakpoints } from './breakpoints';
import { components } from './components';
import { palette } from './palette';
import { shape } from './shape';
// import { typography } from './typography';

// Update the Typography's variant prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    white: true;
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    phone: true; // adds the `tablet` breakpoint
    tablet: true;
    desktop: true;
  }
  interface TypeText {
    danger: string;
    primary: string;
    white: string;
    secondary: string;
    gray: string;
    orange: string;
    green: string;
    disabled: string;
  }
  interface TypographyVariants {
    bodyBold: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    bodyBold?: React.CSSProperties;
  }
}

// declare module '@mui/material/styles' {
//   interface Palette {
//     fieldBackground: CSSProperties['color'];
//     alert: {
//       warning: CSSProperties['color'];
//       success: CSSProperties['color'];
//     };
//   }
//   interface PaletteOptions {
//     fieldBackground: CSSProperties['color'];
//     alert: {
//       warning: CSSProperties['color'];
//       success: CSSProperties['color'];
//     };
//   }
// }

export const theme = createTheme({
  // typography,
  palette,
  breakpoints,
  shape,
  spacing: 4,
  components,
});
