import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import appRoutes from 'routes/appRoutes';
import useStyles from './styles';

const Payment = props => {
  const classes = useStyles;
  const payment = props;

  console.log('{payment.name}', payment);

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5" align="center">
          {payment.name}
        </Typography>
        <CardContent>
          <Typography component="p" color="textSecondary">
            Комментарий
          </Typography>
          <Typography variant="h6" component="p">
            {payment.comment}
          </Typography>
          <Divider />
          <Typography component="p" color="textSecondary">
            Дата платежа
          </Typography>
          <Typography variant="h6" component="p">
            22.13.14
          </Typography>
          <Divider />
          <Typography component="p" color="textSecondary">
            Статус
          </Typography>
          <Typography variant="h6" component="p">
            Оплачено
          </Typography>
          <Divider />
          <Typography component="p" color="textSecondary">
            Сумма
          </Typography>
          <Typography variant="h6" component="p">
            22р
          </Typography>
          <Divider />
          <Typography component="p" color="textSecondary">
            Реквизиты получателя
          </Typography>
          <Typography variant="h6" component="p">
            890367892
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

export default Payment;
