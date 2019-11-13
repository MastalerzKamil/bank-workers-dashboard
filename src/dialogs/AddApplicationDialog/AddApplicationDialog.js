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

const AddApplicationDialog = ({ openedDialog, actions }) => {
  const { hideModal } = actions;
  return (
    <Dialog
      aria-labelledby="form-dialog-title"
      onClose={hideModal}
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
          onClick={hideModal}
        >
        Cancel
        </Button>
        <Button
          color="primary"
          onClick={hideModal}
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
    showModal: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired,
  }).isRequired,
  openedDialog: PropTypes.func.isRequired,
}

export default AddApplicationDialog;