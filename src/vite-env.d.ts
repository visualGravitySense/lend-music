/// <reference types="vite/client" />

import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    vars?: {
      palette?: {
        mode?: string;
        divider?: string;
        [key: string]: any;
      };
      shape?: {
        borderRadius?: number | string;
        [key: string]: any;
      };
      [key: string]: any;
    };
  }
}
