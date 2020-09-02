import React from 'react';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import PaymentForm from './components/PaymentForm/PaymentForm';

import useStyles from './styles';

const NewPaymentsPage = () => {
  const classes = useStyles();

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5" align="center">
          Новый платеж
        </Typography>
        <PaymentForm />
        <Button variant="contained" color="primary" className={classes.button}>
          Создать платеж
        </Button>
      </Paper>
    </main>
  );
};

export default NewPaymentsPage;
