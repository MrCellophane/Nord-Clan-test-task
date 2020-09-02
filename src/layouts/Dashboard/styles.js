// import { makeStyles } from '@material-ui/core/styles';

const useStyles = () => ({
  content: {
    background: 'var(--color-whisper)',
    minHeight: 'calc(100vh - (var(--header-height) + var(--footer-height)))',
    overflow: 'auto',
    paddingBottom: 'var(--footer-height)',
    position: 'relative',
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default useStyles;
