import React from 'react';
import {
  Dialog,
  DialogTitle,
  TextField,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';

import { PropTypes } from 'prop-types';

const AddApplicationDialog = (props) => {
  const { actions, openedDialog } = props;
  const { hideDialog } = actions;
  return (
    <Dialog
      aria-labelledby="form-dialog-title"
      onClose={() => hideDialog()}
      open={openedDialog}
    >
      <DialogTitle id="form-dialog-title">Składanie wniosku</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Formularz do składania wniosku
        </DialogContentText>
        <TextField
          autoFocus
          fullWidth
          id="name"
          label="Imię"
          margin="dense"
          type="email"
        />
        <TextField
          autoFocus
          fullWidth
          id="name"
          label="Email Address"
          margin="dense"
          type="email"
        />
        <TextField
          autoFocus
          fullWidth
          id="name"
          label="Email Address"
          margin="dense"
          type="email"
        />
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          onClick={() => hideDialog()}
        >
        Cancel
        </Button>
        <Button
          color="primary"
          onClick={() => hideDialog()}
        >
        Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  );
}

AddApplicationDialog.defaultProps = {
  openedDialog: false,
}

AddApplicationDialog.propTypes = {
  actions: PropTypes.shape({
    showDialog: PropTypes.func.isRequired,
    hideDialog: PropTypes.func.isRequired,
  }).isRequired,
  openedDialog: PropTypes.func.isRequired,
}

export default AddApplicationDialog;