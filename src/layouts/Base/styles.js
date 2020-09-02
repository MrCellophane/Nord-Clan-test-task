const useStyles = () => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: 'var(--color-whisper)',
    minHeight: '100vh',
    padding: '30px 30px 0',
    boxSizing: 'border-box',
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  copyright: {
    padding: '20px',
    textAlign: 'center',
    fontSize: '12px',
    boxSizing: 'border-box',
    width: '100%',
    marginTop: '40px',
  },
});

export default useStyles;
