import { createTheme } from '@mui/material/styles';
import shadows from '@mui/material/styles/shadows';

const theme = createTheme({
  palette: {
    primary: {
      light: '#c0c7d5',
      main: '#384d77',
      dark: '#1b243f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ebf299',
      main: '#b2ca2d',
      dark: '#79770a',
      contrastText: '#000',
    },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#fff',
          color: '#000',
          fontSize: '15px',
          fontWeight: 400,
          padding: '7px',
          boxShadow: shadows[5],
        },
      },
    },
  },
});

export default theme;
