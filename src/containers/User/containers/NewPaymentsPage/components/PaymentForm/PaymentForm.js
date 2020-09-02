import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const PaymentForm = () => {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField required id="name" name="name" label="Наименование" fullWidth autoComplete="given-name" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Дата платежа"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address2"
            name="address2"
            label="Статус"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="city" name="city" label="Сумма" fullWidth autoComplete="shipping address-level2" />
        </Grid>
        <Grid item xs={12}>
          <TextField required id="state" name="state" label="Реквизиты" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField id="comment" name="comment" label="Комментарий" fullWidth autoComplete="family-name" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PaymentForm;
