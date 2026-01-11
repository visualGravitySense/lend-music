import { alpha, Theme, Components } from '@mui/material/styles';
import { gray } from '../themePrimitives';

/* eslint-disable import/prefer-default-export */
export const surfacesCustomizations: Components<Theme> = {
  MuiAccordion: {
    defaultProps: {
      elevation: 0,
      disableGutters: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        padding: 4,
        overflow: 'clip',
        backgroundColor: theme.vars?.palette?.background?.default ?? theme.palette.background.default,
        border: '1px solid',
        borderColor: theme.vars?.palette?.divider ?? theme.palette.divider,
        ':before': {
          backgroundColor: 'transparent',
        },
        '&:not(:last-of-type)': {
          borderBottom: 'none',
        },
        '&:first-of-type': {
          borderTopLeftRadius: theme.vars?.shape?.borderRadius ?? theme.shape.borderRadius,
          borderTopRightRadius: theme.vars?.shape?.borderRadius ?? theme.shape.borderRadius,
        },
        '&:last-of-type': {
          borderBottomLeftRadius: theme.vars?.shape?.borderRadius ?? theme.shape.borderRadius,
          borderBottomRightRadius: theme.vars?.shape?.borderRadius ?? theme.shape.borderRadius,
        },
      }),
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: ({ theme }) => ({
        border: 'none',
        borderRadius: 8,
        '&:hover': { backgroundColor: gray[50] },
        '&:focus-visible': { backgroundColor: 'transparent' },
        ...theme.applyStyles('dark', {
          '&:hover': { backgroundColor: gray[800] },
        }),
      }),
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: { mb: 20, border: 'none' },
    },
  },
  MuiPaper: {
    defaultProps: {
      elevation: 0,
    },
  },
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => {
        return {
          padding: 24,
          gap: 20,
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          backgroundColor: gray[50],
          borderRadius: theme.vars?.shape?.borderRadius ?? theme.shape.borderRadius,
          border: 'none',
          boxShadow: theme.palette.mode === 'dark'
            ? '0 2px 8px rgba(0, 0, 0, 0.15), 0 4px 16px rgba(0, 0, 0, 0.1)'
            : '0 2px 8px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.02)',
          cursor: 'pointer',
          ...theme.applyStyles('dark', {
            backgroundColor: gray[800],
          }),
          '&:hover': {
            transform: 'translateY(-8px) scale(1.02)',
            boxShadow: theme.palette.mode === 'dark'
              ? '0 8px 32px rgba(0, 0, 0, 0.25), 0 16px 48px rgba(0, 0, 0, 0.15)'
              : '0 8px 32px rgba(0, 0, 0, 0.08), 0 16px 48px rgba(0, 0, 0, 0.04)',
          },
          variants: [
            {
              props: {
                variant: 'outlined',
              },
              style: {
                border: 'none',
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 2px 8px rgba(0, 0, 0, 0.15), 0 4px 16px rgba(0, 0, 0, 0.1)'
                  : '0 2px 8px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.02)',
                background: 'hsl(0, 0%, 100%)',
                ...theme.applyStyles('dark', {
                  background: alpha(gray[900], 0.4),
                }),
              },
            },
          ],
        };
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: 0,
        '&:last-child': { paddingBottom: 0 },
      },
    },
  },
  MuiCardHeader: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
  MuiCardActions: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
};
