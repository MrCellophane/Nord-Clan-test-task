import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const BootstrapButton = withStyles({
  root: {
    textTransform: 'none',
  },
})(Button);

export default BootstrapButton;
