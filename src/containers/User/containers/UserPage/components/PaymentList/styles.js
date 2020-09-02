import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    marginLeft: 12,
    width: '98%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 550,
    marginLeft: 40,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default useStyles;
