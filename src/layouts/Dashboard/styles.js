const useStyles = () => ({
  content: {
    minHeight: 'calc(100vh - (var(--header-height) + var(--footer-height)))',
    overflow: 'auto',
    paddingBottom: 'var(--footer-height)',
    position: 'relative',
  },
});

export default useStyles;
