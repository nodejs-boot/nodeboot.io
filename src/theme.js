import { createTheme } from '@mui/material/styles';

// Node-Boot Framework Theme
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#07E770',
      light: '#20e97e',
      dark: '#06cb63',
      contrastText: '#000000',
    },
    secondary: {
      main: '#637381',
      light: '#73818e',
      dark: '#576572',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#003720',
      secondary: '#637381',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: '#07E770',
    },
  },
  typography: {
    fontFamily: 'system-ui, sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto"',
    h1: {
      fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
      fontWeight: 700,
      lineHeight: 0.9,
      letterSpacing: '-0.02em',
      color: '#003720',
    },
    h2: {
      fontSize: 'clamp(1.875rem, 4vw, 3rem)',
      fontWeight: 600,
      lineHeight: 0.95,
      letterSpacing: '-0.015em',
      color: '#003720',
    },
    h3: {
      fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      color: '#003720',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.3,
      color: '#003720',
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.3,
      color: '#003720',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.3,
      color: '#003720',
    },
    body1: {
      fontSize: 'clamp(1rem, 2vw, 1.125rem)',
      lineHeight: 1.5,
      color: '#0e0f0c',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.4,
      color: '#637381',
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.3,
      color: '#afb7b4',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '9999px',
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '1rem',
          padding: '14px 24px',
          minHeight: '48px',
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'scale(1.02)',
          },
          '&:active': {
            transform: 'scale(0.98)',
          },
        },
        contained: {
          background: 'linear-gradient(to bottom right, #07E770, #06cb63)',
          color: '#000000',
          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
          '&:hover': {
            boxShadow: '0px 4px 8px rgba(148, 242, 127, 0.3)',
          },
        },
        outlined: {
          borderColor: 'rgba(0, 0, 0, 0.1)',
          color: '#003720',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            borderColor: 'rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderRadius: '9999px',
          margin: '1.5rem',
          width: 'calc(100% - 3rem)',
          left: 0,
          right: 0,
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          border: '0.5px solid rgba(0, 0, 0, 0.1)',
          color: '#003720',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '9999px',
          backgroundColor: 'rgba(148, 242, 127, 0.1)',
          color: '#0d7916',
          fontWeight: 500,
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
});

export default theme;