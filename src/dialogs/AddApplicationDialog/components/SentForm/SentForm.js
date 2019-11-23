import React from 'react';
import {
  Dialog,
  DialogTitle,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';

import { PropTypes } from 'prop-types';

const SentForm = (props) => {
  const { isSentApplication, handleClose } = props;

  return (
    <Dialog
      aria-labelledby="form-dialog-title"
      onClose={() => handleClose()}
      open={isSentApplication}
    >
      <DialogTitle id="form-dialog-title">Potwierdzenie wysłania</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Wniosek został wysłany
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          onClick={() => handleClose()}
        >
        Zamknij
        </Button>
      </DialogActions>
    </Dialog>
  )
}

SentForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isSentApplication: PropTypes.bool.isRequired,
}

export default SentForm;