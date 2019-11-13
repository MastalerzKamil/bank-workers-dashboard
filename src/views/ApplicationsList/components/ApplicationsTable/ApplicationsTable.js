import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
  Button
} from '@material-ui/core';

import { getInitials } from 'helpers';
import { AddApplicationDialog } from 'dialogs';

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

const ApplicationsTable = props => {
  const { className, applicants, ...rest } = props;

  const classes = useStyles();

  const [selectedApplicants, setSelectedApplicants] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const [openDialog, setOpenDialog] = useState(false);
  /*
  const handleSelectAll = event => {
    const { applicants } = props;

    let selectedApplicants;

    if (event.target.checked) {
      selectedApplicants = applicants.map(applicants => applicants.id);
    } else {
      selectedApplicants = [];
    }

    setSelectedUsers(selectedApplicants);
  };
  */

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedApplicants.indexOf(id);
    let newSelectedUsers = [];

    if (selectedIndex === -1) {
      newSelectedUsers = newSelectedUsers.concat(selectedApplicants, id);
    } else if (selectedIndex === 0) {
      newSelectedUsers = newSelectedUsers.concat(selectedApplicants.slice(1));
    } else if (selectedIndex === selectedApplicants.length - 1) {
      newSelectedUsers = newSelectedUsers.concat(selectedApplicants.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedUsers = newSelectedUsers.concat(
        selectedApplicants.slice(0, selectedIndex),
        selectedApplicants.slice(selectedIndex + 1)
      );
    }

    setSelectedApplicants(newSelectedUsers);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const handleOpenDialog = () => {
    setOpenDialog(true);
  }

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  return (
    <div>
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
                    <TableCell>Klient</TableCell>
                    <TableCell>Typ wniosku</TableCell>
                    <TableCell>kwota</TableCell>
                    <TableCell>data</TableCell>
                    <TableCell/>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {applicants.slice(0, rowsPerPage).map(element => (
                    <TableRow
                      className={classes.tableRow}
                      hover
                      key={element.id}
                      selected={selectedApplicants.indexOf(element.id) !== -1}
                    >
                      <TableCell>
                        <div className={classes.nameContainer}>
                          <Avatar
                            className={classes.avatar}
                            src={element.avatarUrl}
                          >
                            {getInitials(element.firstName)}{' '} {getInitials(element.lastName)}
                          </Avatar>
                          <Typography variant="body1">{element.client.firstName}{' '}{element.client.lastName}</Typography>
                        </div>
                      </TableCell>
                      <TableCell>{element.type}</TableCell>
                      <TableCell>{element.amount}</TableCell>
                      <TableCell>{element.data}</TableCell>
                      <TableCell>
                        <Button
                          color="primary"
                          variant="contained"
                        >
                          Rozpatrz
                        </Button>
                      </TableCell>
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
            count={applicants.length}
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handleRowsPerPageChange}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <AddApplicationDialog isOpenedDialog={openDialog} handleClose={handleCloseDialog}/>
    </div>
  );
};

ApplicationsTable.propTypes = {
  applicants: PropTypes.array.isRequired,
  className: PropTypes.string
};

export default ApplicationsTable;
