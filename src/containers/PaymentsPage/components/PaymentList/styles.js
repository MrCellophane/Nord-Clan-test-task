import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    marginLeft: 12,
    width: '98%',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(5),
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
  rootFilter: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    marginLeft: 20,
  },
  link: {
    color: theme.palette.common.blue,
    textDecoration: 'none',
    '&:hover': {
      fontWeight: 600,
    },
  },
  head: {
    backgroundColor: theme.palette.common.blue2,
    color: theme.palette.common.white,
    fontWeight: 600,
  },
}));

export default useStyles;
