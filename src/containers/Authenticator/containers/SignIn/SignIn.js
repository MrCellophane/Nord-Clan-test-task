import React from 'react';
import { useHistory } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useFormik } from 'formik';
import Alert from '@material-ui/lab/Alert';
import appRoutes from 'routes/appRoutes';

import { validationSchema, initialValues } from 'forms/SignIn';

import { useActions } from 'store/auth';

import useStyles from './styles';

const SignIn = () => {
  const history = useHistory();
  const { signIn } = useActions();

  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit: ({ email, password }, { setErrors }) => {
      return signIn(email, password)
        .then(() => history.push(appRoutes.rootPath()))
        .catch(() => {
          setErrors({ email: 'Неправильный email или пароль' });
        });
    },
  });

  const classes = useStyles();

  const { errors, values, handleChange, handleSubmit, isSubmitting } = formik;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Войти
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            error={Boolean(errors.email)}
            helperText={errors.email}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Почта"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
            value={values.email}
          />
          <TextField
            error={Boolean(errors.password)}
            helperText={errors.password}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
            value={values.password}
          />
          {errors.serverSignInError && <Alert severity="error">{errors.serverSignInError}</Alert>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isSubmitting}
          >
            Войти
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default SignIn;
