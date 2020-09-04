import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';

import useStyles from './styles';

const Filter = props => {
  const classes = useStyles;
  const { payments, statusValue, sumValue, sumMax, sumMin, setStatusValue, setSumValue } = props;

  const handleSumChange = (event, newValue) => {
    setSumValue(newValue);
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={3} className={classes.rootFilter}>
        <Autocomplete
          multiple
          limitTags={2}
          id="multiple-limit-tags"
          options={payments}
          getOptionLabel={option => option.status}
          renderInput={params => <TextField {...params} variant="outlined" label="Статус" placeholder="Статус" />}
          value={statusValue}
          onChange={(event, newValue) => {
            setStatusValue(newValue);
          }}
        />
      </Grid>
      <Grid item xs={12} sm={3} className={classes.rootFilter}>
        <Typography id="non-linear-slider" gutterBottom>
          Размер оплаты
        </Typography>
        <Slider
          min={sumMin}
          max={sumMax}
          value={sumValue}
          onChange={handleSumChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
        />
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
