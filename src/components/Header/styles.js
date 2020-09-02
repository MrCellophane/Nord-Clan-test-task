import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  balance: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

export default useStyles;
