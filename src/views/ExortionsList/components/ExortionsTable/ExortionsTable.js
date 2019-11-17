import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const ExortionsTable = props => {
  const { className, exortions, ...rest } = props;

  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);

  const classes = useStyles();

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Wnioskujący</TableCell>
                  <TableCell>Przyczyna</TableCell>
                  <TableCell>Organ</TableCell>
                  <TableCell>Rodzaj klienta</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {exortions.slice(0, rowsPerPage).map(element => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={element.id}
                  >
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Typography variant="body1">{element.client.firstName}{' '}{element.client.lastName}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>{element.reason}</TableCell>
                    <TableCell>{element.organ}</TableCell>
                    <TableCell>{element.clientType}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={exortions.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  )
}

ExortionsTable.propTypes = {
  className: PropTypes.string,
  exortions: PropTypes.array.isRequired,
}

export default ExortionsTable;