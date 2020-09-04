import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  rootFilter: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    marginLeft: 20,
  },
}));

export default useStyles;
