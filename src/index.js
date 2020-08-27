import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './theme';

import store from './store';

import App from './App';

const mountPoint = document.getElementById('root');

render(
  <>
    <CssBaseline />
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </>,
  mountPoint,
);
