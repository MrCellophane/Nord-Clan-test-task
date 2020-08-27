import { createMuiTheme } from '@material-ui/core/styles';

const white = '#fff';
const black = '#0f0f0f';

const theme = createMuiTheme({
  palette: {
    common: {
      white,
      black,
    },
  },
});

export default theme;
