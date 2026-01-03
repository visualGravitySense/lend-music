/// <reference types="vite/client" />

import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    vars?: {
      palette?: {
        mode?: string;
        [key: string]: any;
      };
      [key: string]: any;
    };
  }
}

import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    vars?: {
      palette?: {
        mode?: string;
        [key: string]: any;
      };
      [key: string]: any;
    };
  }
}
