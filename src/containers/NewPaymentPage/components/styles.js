import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  dateField: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  typography: {
    marginLeft: theme.spacing(1),
  },
  button: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 12,
  },
}));

export default useStyles;
