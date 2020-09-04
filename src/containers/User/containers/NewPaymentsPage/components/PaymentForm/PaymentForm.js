import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const PaymentForm = () => {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField required id="name" label="Наименование" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="createdAt" name="createdAt" label="Дата платежа" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="status" name="status" label="Статус" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="sum" name="sum" label="Сумма" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField required id="requisite" name="requisite" label="Реквизиты" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField id="comment" name="comment" label="Комментарий" fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PaymentForm;
