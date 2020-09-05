import { createMuiTheme } from '@material-ui/core/styles';

const white = '#fff';
const black = '#0f0f0f';
const blue = '#38528e';
const blue2 = '#4766adf2';
const grey = '#a2a1a5';

const theme = createMuiTheme({
  palette: {
    common: {
      white,
      black,
      blue,
      grey,
      blue2,
    },
  },
});

export default theme;
