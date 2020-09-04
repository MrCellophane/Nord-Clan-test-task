import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import appRoutes from 'routes/appRoutes';
import EnhancedTableHead from '../EnhancedTableHead/EnhancedTableHead';
import Filter from '../Filter/Filter';

import useStyles from './styles';

function sumDefaultValues(payments) {
  return payments.reduce((a, p) => [p.sum < a[0] ? p.sum : a[0], p.sum > a[1] ? p.sum : a[1]], [
    payments[0].sum,
    payments[0].sum,
  ]);
}

// https://momentjs.com/

const PaymentList = props => {
  const { payments } = props;
  const classes = useStyles();
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('date');
  const [page, setPage] = useState(0);
  const [dense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [statusValue, setStatusValue] = useState([]);

  const sumDefaults = sumDefaultValues(payments);
  const [sumValue, setSumValue] = useState(sumDefaults);

  const filteredPayments = payments
    .filter(p => statusValue.length === 0 || statusValue.find(s => s.status === p.status))
    .filter(p => p.sum >= sumValue[0] && p.sum <= sumValue[1]);

  const descendingComparator = (a, b, orderBuCo) => {
    if (b[orderBuCo] < a[orderBuCo]) {
      return -1;
    }
    if (b[orderBuCo] > a[orderBuCo]) {
      return 1;
    }
    return 0;
  };

  const getComparator = (ordergetComparator, orderBygetComparator) => {
    return ordergetComparator === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBygetComparator)
      : (a, b) => -descendingComparator(a, b, orderBygetComparator);
  };

  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const orderProduct = comparator(a[0], b[0]);
      if (orderProduct !== 0) return orderProduct;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyPayments = rowsPerPage - Math.min(rowsPerPage, payments.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Filter
          payments={payments}
          statusValue={statusValue}
          sumValue={sumValue}
          sumMax={sumDefaults[1]}
          sumMin={sumDefaults[0]}
          setStatusValue={setStatusValue}
          setSumValue={setSumValue}
        />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rpaymentCount={filteredPayments.length}
            />
            <TableBody>
              {stableSort(filteredPayments, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(payment => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={payment.name}>
                    <TableCell component="th" scope="row" padding="none">
                      <Link to={appRoutes.paymentPath(payment.id)}>{payment.name}</Link>
                    </TableCell>
                    <TableCell align="right">{payment.status}</TableCell>
                    <TableCell align="right">{payment.sum}</TableCell>
                    <TableCell align="right">{payment.requisite}</TableCell>
                    <TableCell align="right">{payment.comment}</TableCell>
                    <TableCell align="right">{payment.createdAt}</TableCell>
                  </TableRow>
                ))}
              {emptyPayments > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyPayments }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredPayments.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

PaymentList.propTypes = {
  payments: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default PaymentList;
