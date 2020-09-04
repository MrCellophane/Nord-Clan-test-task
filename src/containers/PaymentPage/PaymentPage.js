import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import useCurrentPaymentsContainer from 'sharedContainers/CurrentPaymentsContainer';

import appRoutes from 'routes/appRoutes';
import useStyles from './styles';

const PaymentPage = ({ currentUser }) => {
  const { currentPayment, loadPayment } = useCurrentPaymentsContainer();

  const { paymentId } = useParams();
  const classes = useStyles();

  useEffect(() => {
    loadPayment(currentUser.id, paymentId);
  }, []);

  if (!currentPayment) {
    return <div />;
  }

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5" align="center">
          {currentPayment.name}
        </Typography>
        <CardContent>
          <Typography component="p" color="textSecondary">
            Комментарий
          </Typography>
          <Typography variant="h6" component="p">
            {currentPayment.comment}
          </Typography>
          <Divider />
          <Typography component="p" color="textSecondary">
            Дата платежа
          </Typography>
          <Typography variant="h6" component="p">
            {currentPayment.createdAt}
          </Typography>
          <Divider />
          <Typography component="p" color="textSecondary">
            Статус
          </Typography>
          <Typography variant="h6" component="p">
            {currentPayment.status}
          </Typography>
          <Divider />
          <Typography component="p" color="textSecondary">
            Сумма
          </Typography>
          <Typography variant="h6" component="p">
            {currentPayment.sum}
          </Typography>
          <Divider />
          <Typography component="p" color="textSecondary">
            Реквизиты получателя
          </Typography>
          <Typography variant="h6" component="p">
            {currentPayment.requisite}
          </Typography>
          <Divider />
        </CardContent>
        <Button variant="contained" color="primary" className={classes.button} href={appRoutes.rootPath()}>
          Назад
        </Button>
      </Paper>
    </main>
  );
};

PaymentPage.propTypes = {
  currentUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default PaymentPage;
