import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import MoneyIcon from '@material-ui/icons/Money';

const Filter = props => {
  const { payments, statusValue, sumValue, sumMax, sumMin, setStatusValue, setSumValue } = props;

  const handleSumChange = (event, newValue) => {
    setSumValue(newValue);
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Autocomplete
          multiple
          limitTags={2}
          style={{ width: 300 }}
          id="multiple-limit-tags"
          size="small"
          options={payments}
          getOptionLabel={option => option.status}
          renderInput={params => <TextField {...params} variant="standard" label="Статус" placeholder="Статус" />}
          value={statusValue}
          onChange={(event, newValue) => {
            setStatusValue(newValue);
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography id="non-linear-slider" gutterBottom>
          Размер оплаты
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <MoneyIcon />
          </Grid>
          <Grid item xs>
            <Slider
              style={{ width: 300 }}
              min={sumMin}
              max={sumMax}
              value={sumValue}
              onChange={handleSumChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Filter.propTypes = {
  payments: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  statusValue: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  sumValue: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  sumMax: PropTypes.number.isRequired,
  sumMin: PropTypes.number.isRequired,
  setStatusValue: PropTypes.func.isRequired,
  setSumValue: PropTypes.func.isRequired,
};

export default Filter;
