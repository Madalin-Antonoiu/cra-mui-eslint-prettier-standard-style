import { createTheme } from '@material-ui/core/styles';

const myBlue = '#0B72B9';
const myOrange = '#FFBA60';

export default createTheme({
  palette: {
    common: {
      blue: myBlue,
      orange: myOrange,
    },

    /*
     * Auto-generate light/dark variant of these colors
     * Overwrite primary and secondary colors throughtout the app
     */
    primary: {
      main: myBlue,
    },
    secondary: {
      main: myOrange,
    },
  },
});
