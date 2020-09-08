import React from 'react';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import appRoutes from 'routes/appRoutes';

import useStyles from './styles';

const NotPayments = () => {
  const classes = useStyles();

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography variant="h5" align="center">
          У вас нет платежей.
        </Typography>
        <Link to={appRoutes.newPaymentPath()} className={classes.link}>
          Создайте новый
        </Link>
      </Paper>
    </main>
  );
};

export default NotPayments;
