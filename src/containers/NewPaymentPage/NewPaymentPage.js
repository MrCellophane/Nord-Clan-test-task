import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import PaymentForm from './components/PaymentForm';

import useStyles from './styles';

const NewPaymentPage = () => {
  const classes = useStyles();

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5" align="center">
          Создать платеж
        </Typography>
        <PaymentForm />
      </Paper>
    </main>
  );
};

export default NewPaymentPage;
