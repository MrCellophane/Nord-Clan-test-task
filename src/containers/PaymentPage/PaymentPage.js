import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import MoneyIcon from '@material-ui/icons/Money';
import CheckIcon from '@material-ui/icons/Check';
import CommentIcon from '@material-ui/icons/Comment';
import InputAdornment from '@material-ui/core/InputAdornment';

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

  const isCommentExist = currentPayment.comment !== '';

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5" align="center">
          {currentPayment.name}
        </Typography>
        <Typography component="p" color="textSecondary" className={classes.title}>
          Сумма
        </Typography>
        <div className={classes.field}>
          <InputAdornment position="start">
            <MoneyIcon />
          </InputAdornment>
          <Typography variant="h6" component="p">
            {currentPayment.sum}
          </Typography>
        </div>
        <Divider />
        <Typography component="p" color="textSecondary" className={classes.title}>
          Дата платежа
        </Typography>
        <div className={classes.field}>
          <InputAdornment position="start">
            <CalendarTodayIcon />
          </InputAdornment>
          <Typography variant="h6" component="p">
            {currentPayment.createdAt}
          </Typography>
        </div>
        <Divider />
        <Typography component="p" color="textSecondary" className={classes.title}>
          Реквизиты получателя
        </Typography>
        <div className={classes.field}>
          <InputAdornment position="start">
            <CreditCardIcon />
          </InputAdornment>
          <Typography variant="h6" component="p">
            {currentPayment.requisite}
          </Typography>
        </div>
        <Divider />
        <Typography component="p" color="textSecondary" className={classes.title}>
          Статус
        </Typography>
        <div className={classes.field}>
          <InputAdornment position="start">
            <CheckIcon />
          </InputAdornment>
          <Typography variant="h6" component="p">
            {currentPayment.status}
          </Typography>
        </div>
        <Divider />
        {isCommentExist && (
          <>
            <Typography component="p" color="textSecondary" className={classes.title}>
              Комментарий
            </Typography>
            <div className={classes.field}>
              <InputAdornment position="start">
                <CommentIcon />
              </InputAdornment>
              <Typography variant="h6" component="p">
                {currentPayment.comment}
              </Typography>
            </div>
            <Divider />
          </>
        )}
        <Button
          variant="contained"
          color="primary"
          style={{ width: 170 }}
          className={classes.button}
          href={appRoutes.rootPath()}
        >
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
