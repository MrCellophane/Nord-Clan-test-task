import React from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import MoneyIcon from '@material-ui/icons/Money';
import CheckIcon from '@material-ui/icons/Check';
import CommentIcon from '@material-ui/icons/Comment';
import InputAdornment from '@material-ui/core/InputAdornment';

import appRoutes from 'routes/appRoutes';

import { getSelectors as useAuthStore, useActions as useAuthActions } from 'store/auth';
import { validationSchema, initialValues } from 'forms/PaymentForm';
import { useActions } from 'store/newPayment';

import useStyles from './styles';

const PaymentForm = () => {
  const history = useHistory();
  const { createPayment } = useActions();
  const { currentUser } = useAuthStore();
  const { updateProfile } = useAuthActions();

  const currentUserId = currentUser.id;
  const currentUserBalance = currentUser.balance;
  const [createdAt] = new Date().toLocaleDateString().split('/');

  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit: ({ name, status, sum, requisite, comment }, { setErrors }) => {
      if (currentUserBalance < sum) {
        return setErrors({ sum: 'У вас на счету недостаточно средств' });
      }
      return createPayment(currentUserId, { name, createdAt, status, sum, requisite, comment })
        .then(() => history.push(appRoutes.rootPath()))
        .then(() => {
          const balance = currentUser.balance - sum;
          return updateProfile(currentUser, { balance });
        });
    },
  });

  const classes = useStyles();

  const { errors, values, handleChange, handleSubmit } = formik;

  return (
    <Container component="main" maxWidth="xs">
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              error={Boolean(errors.name)}
              helperText={errors.name}
              required
              fullWidth
              id="name"
              label="Наименование"
              name="name"
              autoFocus
              onChange={handleChange}
              value={values.name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              error={Boolean(errors.status)}
              helperText={errors.status}
              required
              fullWidth
              name="status"
              label="Статус"
              defaultValue={values.status}
              type="status"
              id="status"
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CheckIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              error={Boolean(errors.sum)}
              helperText={errors.sum}
              required
              fullWidth
              name="sum"
              label="Сумма в рублях"
              type="sum"
              id="sum"
              onChange={handleChange}
              value={values.sum}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MoneyIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={Boolean(errors.requisite)}
              helperText={errors.requisite}
              required
              fullWidth
              id="requisite"
              label="Реквизиты"
              name="requisite"
              onChange={handleChange}
              value={values.requisite}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CreditCardIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={Boolean(errors.comment)}
              helperText={errors.comment}
              fullWidth
              id="comment"
              label="Комментарий"
              name="comment"
              onChange={handleChange}
              value={values.comment}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CommentIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <div className={classes.typography}>
            <Typography fullWidth color="textSecondary" className={classes.text}>
              Дата платежа
            </Typography>
          </div>
          <Grid item xs={12} sm={12} className={classes.dateField}>
            <InputAdornment position="start">
              <CalendarTodayIcon />
            </InputAdornment>
            <Typography fullWidth>{createdAt}</Typography>
          </Grid>
          <Grid item xs={12} sm={12} className={classes.button}>
            <Button href={appRoutes.rootPath()} variant="contained" color="primary" style={{ width: 170 }}>
              Отменить
            </Button>
            <Button type="submit" variant="contained" color="primary" style={{ width: 170 }}>
              Создать платеж
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default PaymentForm;
